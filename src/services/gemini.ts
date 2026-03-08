import { GoogleGenAI } from "@google/genai";
import { Student } from "../data/students";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY is missing. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function getAdvice(student: Student) {
  const prompt = `
    Bạn là một chuyên gia tư vấn giáo dục và hướng nghiệp tại Việt Nam. 
    Hãy phân tích kết quả thi của học sinh sau đây và đưa ra lời khuyên:
    
    Học sinh: ${student.name}
    Lớp: ${student.className}
    Điểm số:
    - Toán: ${student.scores.toan}
    - Văn: ${student.scores.van}
    - Tiếng Anh: ${student.scores.anh}
    - Lịch sử: ${student.scores.su || "N/A"}
    
    Yêu cầu:
    1. Nhận xét ngắn gọn về năng lực học tập dựa trên điểm số (ưu điểm, nhược điểm).
    2. Tư vấn học tập: Cần tập trung vào môn nào, phương pháp cải thiện là gì?
    3. Tư vấn hướng nghiệp: Với tổ hợp điểm này, học sinh phù hợp với các khối thi nào (A00, A01, D01, C00...) và các nhóm ngành nghề nào trong tương lai?
    
    Hãy trả lời bằng tiếng Việt, giọng văn khích lệ, chuyên nghiệp, định dạng Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ parts: [{ text: prompt }] }],
    });
    return response.text || "Không thể lấy lời khuyên lúc này.";
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Đã xảy ra lỗi khi kết nối với chuyên gia AI.";
  }
}
