class Car_manager {
    constructor(hang_xe, ten_xe, loai_xe, gia_tien, so_luong) {
        this.hang_xe = hang_xe;
        this.ten_xe = ten_xe;
        this.loai_xe = loai_xe;
        this.gia_tien = gia_tien;
        this.so_luong = so_luong;
    }


    function add_car() {
        let hang_xe = prompt("Nhập hãng xe");
        let ten_xe = prompt("Nhập tên xe");
        let loai_xe = prompt("Nhập loại xe");
        let gia_tien = prompt("nhập giá tiền");
        let so_luong = prompt("nhập số lượng");
        let car = new Car_manager(hang_xe, ten_xe, loai_xe, gia_tien, so_luong);
        array_car.push(car)
        display();
    }
    function display() {
        let str = '';
        for (let i = 0; i < array_car.length; i++){
            str += '<tr>';
            str += '<td>'+ array_car[i].hang_xe +'</td>';
            str += '<td>'+ array_car[i].ten_xe +'</td>';
            str += '<td>'+ array_car[i].loai_xe +'</td>';
            str += '<td>'+ array_car[i].gia_tien +'</td>';
            str += '<td>'+ array_car[i].so_luong +'</td>';
            str += '<td>'+ '<button onclick="show_editcell('+i+')">Edit</button>' + '</td>';
            str += '<td>'+ '<button onclick="deletekhachhang('+i+')">Delete</button>' + '</td>';
            str += '</tr>';
        }
        display();
    }
}