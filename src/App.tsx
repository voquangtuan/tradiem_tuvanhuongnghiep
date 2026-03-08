import { useState, useMemo } from 'react';
import { Search, GraduationCap, Briefcase, BookOpen, User, Calendar, School, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { students, Student } from './data/students';
import { getAdvice } from './services/gemini';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoadingAdvice, setIsLoadingAdvice] = useState(false);

  const filteredStudents = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return students.filter(s => 
      s.sbd.includes(query) || s.name.toLowerCase().includes(query)
    ).slice(0, 5);
  }, [searchQuery]);

  const handleSelectStudent = async (student: Student) => {
    setSelectedStudent(student);
    setSearchQuery('');
    setAdvice(null);
    setIsLoadingAdvice(true);
    
    try {
      const aiAdvice = await getAdvice(student);
      setAdvice(aiAdvice);
    } catch (error) {
      setAdvice("Có lỗi xảy ra khi tải tư vấn.");
    } finally {
      setIsLoadingAdvice(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">THPT Tân Trào</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Hệ thống tra cứu & Tư vấn</p>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-slate-600">Năm học 2025 - 2026</p>
            <p className="text-xs text-slate-400 italic">Kỳ thi tốt nghiệp THPT</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Search Section */}
        <section className="max-w-2xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Tra cứu điểm thi & Định hướng</h2>
            <p className="text-slate-500 max-w-md mx-auto">Nhập Số báo danh hoặc Họ tên học sinh để xem kết quả và nhận tư vấn từ chuyên gia AI.</p>
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Nhập SBD (ví dụ: 09100001) hoặc Tên..."
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl shadow-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            {/* Search Suggestions */}
            <AnimatePresence>
              {filteredStudents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-40"
                >
                  {filteredStudents.map((student) => (
                    <button
                      key={student.sbd}
                      onClick={() => handleSelectStudent(student)}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                          <User size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{student.name}</p>
                          <p className="text-xs text-slate-500">SBD: {student.sbd} • Lớp: {student.className}</p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-300" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {selectedStudent ? (
            <motion.div
              key={selectedStudent.sbd}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Student Info & Scores */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <User size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{selectedStudent.name}</h3>
                      <p className="text-slate-500 font-medium">SBD: {selectedStudent.sbd}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Calendar size={16} className="text-slate-400" />
                      <span>Ngày sinh: {selectedStudent.dob}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <School size={16} className="text-slate-400" />
                      <span>Lớp: {selectedStudent.className}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-indigo-500" />
                    Bảng điểm chi tiết
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(selectedStudent.scores).map(([subject, score]) => (
                      <div key={subject} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                          {subject === 'toan' ? 'Toán' : 
                           subject === 'van' ? 'Ngữ Văn' : 
                           subject === 'anh' ? 'Tiếng Anh' : 
                           subject === 'su' ? 'Lịch Sử' : subject}
                        </span>
                        <span className={`text-lg font-bold ${score >= 8 ? 'text-emerald-600' : score >= 5 ? 'text-indigo-600' : 'text-rose-500'}`}>
                          {score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Advice Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm min-h-[400px]">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Briefcase size={22} className="text-indigo-500" />
                      Tư vấn học tập & Hướng nghiệp
                    </h4>
                    <div className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-100">
                      AI Powered
                    </div>
                  </div>

                  {isLoadingAdvice ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                      <Loader2 className="animate-spin mb-4" size={40} />
                      <p className="font-medium animate-pulse">Chuyên gia AI đang phân tích kết quả...</p>
                    </div>
                  ) : advice ? (
                    <div className="prose prose-slate prose-indigo max-w-none">
                      <Markdown>{advice}</Markdown>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                      <p>Đang chuẩn bị dữ liệu tư vấn...</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-slate-300"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <Search size={48} />
              </div>
              <p className="text-lg font-medium">Vui lòng nhập thông tin để bắt đầu</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">© 2026 Trường THPT Tân Trào. Tất cả quyền được bảo lưu.</p>
          <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-2">Phát triển bởi AI Studio</p>
        </div>
      </footer>
    </div>
  );
}
