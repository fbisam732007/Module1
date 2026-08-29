function tinhBai1() {
    let ly = parseFloat(document.getElementById('diemLy').value);
    let hoa = parseFloat(document.getElementById('diemHoa').value);
    let sinh = parseFloat(document.getElementById('diemSinh').value);

    if (isNaN(ly) || isNaN(hoa) || isNaN(sinh)) {
        document.getElementById('ketQuaBai1').innerHTML = "Vui lòng nhập đầy đ điểm";
        return;
    }
    if (ly < 0 || ly > 10 || hoa < 0 || hoa > 10 || sinh < 0 || sinh > 10) {
        document.getElementById('ketQuaBai1').innerHTML = "Phải nhập điểm từ 1 đến 10";
        return;
    }

    let tong = ly + hoa + sinh;
    let trungBinh = tong / 3;

    document.getElementById('ketQuaBai1').innerHTML =
        "<h3> Kết quả: </h3>" +
        "Vật lý: <b>" + ly + " </b><br>" +
        "Hóa học: <b>" + hoa + " </b><br>" +
        "Sinh học: <b>" + sinh + "</b><br>" +
        "<hr>" +
        "Tổng điểm: <b>" + tong + "</b><br>" +
        "Điểm trung bình: <b>" + trungBinh.toFixed(2) + "</b><br>"

}
