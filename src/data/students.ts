export interface Student {
  sbd: string;
  name: string;
  dob: string;
  className: string;
  scores: {
    toan: number;
    van: number;
    anh: number;
    ly?: number;
    hoa?: number;
    sinh?: number;
    su?: number;
    dia?: number;
    ktpl?: number;
    tin?: number;
    cn?: number;
  };
}

export const students: Student[] = [
  {
    sbd: "09100001",
    name: "Bùi Đức An",
    dob: "14/05/2008",
    className: "12C7",
    scores: { toan: 3.95, van: 4.25, su: 6.1, anh: 3.75 }
  },
  {
    sbd: "09100002",
    name: "Lã Trần Tâm An",
    dob: "15/10/2008",
    className: "12C7",
    scores: { toan: 6.25, van: 7.25, su: 7.5, anh: 7.75 }
  },
  {
    sbd: "09100003",
    name: "Nguyễn Thu An",
    dob: "14/09/2008",
    className: "12C7",
    scores: { toan: 6.0, van: 7.5, su: 7.5, anh: 8.0 }
  },
  {
    sbd: "09100004",
    name: "Chẩu Quốc Anh",
    dob: "20/08/2008",
    className: "12C5",
    scores: { toan: 4.75, van: 6.75, su: 6.0, anh: 4.25 }
  },
  {
    sbd: "09100005",
    name: "Nguyễn Hà Anh",
    dob: "03/11/2008",
    className: "12C5",
    scores: { toan: 4.0, van: 7.0, su: 6.5, anh: 6.0 }
  },
  {
    sbd: "09100006",
    name: "Đặng Thảo Minh Anh",
    dob: "20/09/2008",
    className: "12C6",
    scores: { toan: 5.0, van: 6.25, su: 6.0, anh: 5.5 }
  },
  {
    sbd: "09100007",
    name: "Lê Quỳnh Anh",
    dob: "10/01/2008",
    className: "12C7",
    scores: { toan: 5.95, van: 7.0, su: 7.35, anh: 3.75 }
  },
  {
    sbd: "09100008",
    name: "Trần Phương Anh",
    dob: "05/02/2008",
    className: "12C7",
    scores: { toan: 5.75, van: 7.0, su: 8.1, anh: 8.75 }
  },
  {
    sbd: "09100009",
    name: "Đặng Như Anh",
    dob: "26/02/2008",
    className: "12C8",
    scores: { toan: 4.75, van: 6.0, su: 7.5, anh: 5.25 }
  },
  {
    sbd: "09100010",
    name: "Đinh Phương Anh",
    dob: "05/06/2008",
    className: "12C8",
    scores: { toan: 3.75, van: 4.5, su: 6.75, anh: 4.0 }
  },
  {
    sbd: "09100011",
    name: "Hoàng Hà Anh",
    dob: "05/08/2008",
    className: "12C8",
    scores: { toan: 6.0, van: 6.5, su: 7.0, anh: 6.75 }
  },
  {
    sbd: "09100012",
    name: "Nguyễn Phương Anh",
    dob: "01/01/2008",
    className: "12C8",
    scores: { toan: 4.6, van: 7.25, su: 7.5, anh: 7.0 }
  },
  {
    sbd: "09100013",
    name: "Trần Hà Anh",
    dob: "06/01/2008",
    className: "12C8",
    scores: { toan: 5.5, van: 5.75, su: 7.25, anh: 6.75 }
  },
  {
    sbd: "09100014",
    name: "Bùi Phương Anh",
    dob: "09/11/2008",
    className: "12C10",
    scores: { toan: 5.5, van: 5.25, su: 7.75, anh: 4.25 }
  },
  {
    sbd: "09100015",
    name: "Lý Hoàng Hồng Anh",
    dob: "30/10/2008",
    className: "12C10",
    scores: { toan: 5.75, van: 6.75, su: 6.5, anh: 0 }
  },
  {
    sbd: "09100016",
    name: "Nguyễn Hoàng Diệu Anh",
    dob: "01/06/2008",
    className: "12C11",
    scores: { toan: 7.0, van: 7.0, su: 7.25, anh: 7.5 }
  },
  {
    sbd: "09100017",
    name: "Phan Ngọc Ánh",
    dob: "04/11/2008",
    className: "12C6",
    scores: { toan: 6.5, van: 6.25, su: 7.25, anh: 4.25 }
  },
  {
    sbd: "09100018",
    name: "Nguyễn Tùng Bách",
    dob: "26/08/2008",
    className: "12C6",
    scores: { toan: 5.75, van: 3.25, su: 4.25, anh: 4.0 }
  },
  {
    sbd: "09100019",
    name: "Phạm Quốc Bảo",
    dob: "14/10/2008",
    className: "12C5",
    scores: { toan: 5.5, van: 6.75, su: 6.1, anh: 6.25 }
  },
  {
    sbd: "09100020",
    name: "Ngô Gia Bảo",
    dob: "16/01/2008",
    className: "12C8",
    scores: { toan: 7.5, van: 6.5, su: 8.25, anh: 9.0 }
  },
  {
    sbd: "09100021",
    name: "Bùi Ngọc Bích",
    dob: "12/06/2008",
    className: "12C11",
    scores: { toan: 6.0, van: 7.25, su: 8.25, anh: 5.75 }
  },
  {
    sbd: "09100022",
    name: "Ngô Quang Bình",
    dob: "30/07/2008",
    className: "12C8",
    scores: { toan: 4.6, van: 5.0, su: 7.75, anh: 8.25 }
  },
  {
    sbd: "09100023",
    name: "Nguyễn Minh Châu",
    dob: "31/07/2008",
    className: "12C7",
    scores: { toan: 6.75, van: 7.25, su: 7.25, anh: 6.75 }
  },
  {
    sbd: "09100024",
    name: "Vũ Nguyễn Linh Chi",
    dob: "28/07/2008",
    className: "12C6",
    scores: { toan: 7.25, van: 7.5, su: 8.0, anh: 0 }
  },
  {
    sbd: "09100025",
    name: "Hà Thị Linh Chi",
    dob: "11/10/2008",
    className: "12C7",
    scores: { toan: 5.5, van: 7.5, su: 6.0, anh: 5.5 }
  },
  {
    sbd: "09100026",
    name: "Đặng Hồng Chuyên",
    dob: "23/07/2008",
    className: "12C11",
    scores: { toan: 6.5, van: 8.0, su: 9.0, anh: 3.5 }
  },
  {
    sbd: "09100027",
    name: "Trần Anh Đại",
    dob: "29/12/2008",
    className: "12C9",
    scores: { toan: 5.0, van: 7.0, su: 5.0, anh: 6.75 }
  },
  {
    sbd: "09100028",
    name: "Đỗ Hồng Diệp",
    dob: "03/10/2008",
    className: "12C8",
    scores: { toan: 6.25, van: 5.75, su: 5.1, anh: 5.25 }
  },
  {
    sbd: "09100029",
    name: "Nguyễn Ngọc Diệp",
    dob: "03/10/2008",
    className: "12C8",
    scores: { toan: 6.25, van: 7.25, su: 7.25, anh: 4.5 }
  },
  {
    sbd: "09100030",
    name: "Vũ Hải Đông",
    dob: "25/04/2008",
    className: "12C10",
    scores: { toan: 5.75, van: 6.75, su: 8.35, anh: 5.0 }
  },
  {
    sbd: "09100031",
    name: "Nguyễn Minh Đức",
    dob: "21/12/2008",
    className: "12C10",
    scores: { toan: 7.75, van: 8.0, su: 7.0, anh: 5.5 }
  },
  {
    sbd: "09100032",
    name: "Đinh Thị Phương Dung",
    dob: "09/12/2008",
    className: "12C7",
    scores: { toan: 7.0, van: 6.75, su: 7.5, anh: 7.5 }
  },
  {
    sbd: "09100033",
    name: "Trần Thị Thùy Dung",
    dob: "21/07/2008",
    className: "12C7",
    scores: { toan: 6.0, van: 7.5, su: 5.85, anh: 5.25 }
  },
  {
    sbd: "09100034",
    name: "Đinh Hoàng Thùy Dung",
    dob: "27/03/2008",
    className: "12C10",
    scores: { toan: 8.0, van: 8.0, su: 9.25, anh: 8.25 }
  },
  {
    sbd: "09100035",
    name: "Đàm Thùy Dương",
    dob: "19/05/2008",
    className: "12C7",
    scores: { toan: 7.5, van: 6.75, su: 6.25, anh: 3.5 }
  },
  {
    sbd: "09100044",
    name: "Phan Huy Hiếu",
    dob: "22/11/2008",
    className: "12C5",
    scores: { toan: 8.5, van: 6.0, su: 8.5, anh: 4.0 }
  },
  {
    sbd: "09100045",
    name: "Nguyễn Minh Hiếu",
    dob: "20/06/2008",
    className: "12C7",
    scores: { toan: 9.0, van: 7.25, su: 7.0, anh: 5.75 }
  },
  {
    sbd: "09100046",
    name: "Nguyễn Phúc Hiếu",
    dob: "13/08/2008",
    className: "12C10",
    scores: { toan: 9.0, van: 7.0, su: 8.5, anh: 4.75 }
  }
];
