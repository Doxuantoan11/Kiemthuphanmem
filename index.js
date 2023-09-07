const tamgiac = document.querySelector('.tamgiac');
const hoahong = document.querySelector('.hoahong');
const nextday = document.querySelector('.nextday');
const tamgiac_form = document.querySelector('.tamgiac-form');
const hoahong_form = document.querySelector('.hoahong-form');
const nextday_form = document.querySelector('.nextday-form');
var caseId =1;
// form-hoahong
const khoaInput = document.querySelector('#khoa');
const bangInput = document.querySelector('#bang');
const nongInput = document.querySelector('#nong');
const hoahongOutput = document.querySelector('.hoahong-kq');
const tinhButton = document.querySelector('.btn_hoahong_tinh');
const xoaButton = document.querySelector('.btn_hoahong_xoa');


// nextday
const ngayInput = document.querySelector('#ngay');
const thangInput = document.querySelector('#thang');
const namInput = document.querySelector('#nam');
const nextdayOutput = document.querySelector('.nextday-kq');
const nextday_btn_tinh = document.querySelector('.btn_nextday_tinh');
const nextday_btn_xoa = document.querySelector('.btn_nextday_xoa');

//tam giac
const aInput = document.querySelector('#a');
const bInput = document.querySelector('#b');
const cInput = document.querySelector('#c');
const tamgiacOutput = document.querySelector('.tamgiac-kq');
const tamgiac_btn_tinh = document.querySelector('.btn_tamgiac_tinh');
const tamgiac_btn_xoa = document.querySelector('.btn_tamgiac_xoa');


tamgiac.addEventListener('click', () => {
  tamgiac_form.classList.remove('d-none');
  tamgiac.classList.add('active');
  hoahong.classList.remove('active');
  nextday.classList.remove('active');
  hoahong_form.classList.add('d-none');
  nextday_form.classList.add('d-none');
});
hoahong.addEventListener('click', () => {
    hoahong_form.classList.remove('d-none');
    hoahong.classList.add('active');
    tamgiac.classList.remove('active');
    nextday.classList.remove('active');
    tamgiac_form.classList.add('d-none');
    nextday_form.classList.add('d-none');
});
nextday.addEventListener('click', () => {
    nextday_form.classList.remove('d-none');
    tamgiac_form.classList.add('d-none');
    hoahong_form.classList.add('d-none');
    nextday.classList.add('active');
    hoahong.classList.remove('active');
    tamgiac.classList.remove('active');
});


// tinh xoa bai toan hoa hong

function Kiemtra(khoa, bang, nong) {
    if (khoa > 0 && khoa <= 70 && bang > 0 && bang <= 80 && nong >0 && khoa <= 90) {
      return true;
    } else {
      return false;
    }
  }
  
  function TinhHoahong() {
    
    var khoa = parseInt(khoaInput.value);
    var bang = parseInt(bangInput.value);
    var nong = parseInt(nongInput.value);
    var hoahong_table = document.querySelector('.hoahong-table').getElementsByTagName('tbody')[0];
    var newRow = hoahong_table.insertRow();
    var newCell0 = newRow.insertCell(0);
    var newCell1 = newRow.insertCell(1);
    var newCell2 = newRow.insertCell(2);
    var newCell3 = newRow.insertCell(3);
    var newCell4 = newRow.insertCell(4);
    var newCell5= newRow.insertCell(5);
    newCell0.appendChild(document.createTextNode(caseId));
    caseId++;
    newCell1.appendChild(document.createTextNode(khoa));
    newCell2.appendChild(document.createTextNode(bang));
    newCell3.appendChild(document.createTextNode(nong));
    if (Kiemtra(khoa, bang, nong)) {
      const soban = khoa * 45 + bang * 30 + nong * 25;
      newCell4.appendChild(document.createTextNode(soban));
      if (soban <= 1000) {
        hoahongOutput.textContent = `Số hoa hồng là: ${soban * 0.1}`;
        newCell5.appendChild(document.createTextNode(soban * 0.1));
      } else if (soban > 1000 && soban <=1800) {
        hoahongOutput.textContent = `Số hoa hồng là: ${1000 * 0.1 + (soban - 1000) * 0.15}`;
        newCell5.appendChild(document.createTextNode(1000 * 0.1 + (soban - 1000) * 0.15));
      } else {
        hoahongOutput.textContent = `Số hoa hồng là: ${1000 * 0.1 + 800 * 0.15 + (soban - 1800) * 0.2}`;
        newCell5.appendChild(document.createTextNode(1000 * 0.1 + 800 * 0.15 + (soban - 1800) * 0.2));
      }
    } else {
      hoahongOutput.textContent = 'Lỗi dữ liệu';
      newCell5.appendChild(document.createTextNode('Lỗi dữ liệu'));
    }
  }
  
  function XoaHoahong() {
    khoaInput.value = '';
    bangInput.value = '';
    nongInput.value = '';
    khoaInput.focus();
    hoahongOutput.textContent = `Kết quả :`
  }
  
// ham next day
function laNamNhuan(nam)
{
	if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0)
	{
		return true;
	}
	return false;
}
function tinhSoNgayTrongThang(thang,nam)
{
	var nNumOfDays;

	switch (thang)
	{
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12: 
		nNumOfDays = 31;
		break;
	case 4:
	case 6:
	case 9:
	case 11: 
		nNumOfDays = 30;
		break;
	case 2:
		if (laNamNhuan(nam))
		{
			nNumOfDays = 29;
		}
		else
		{
			nNumOfDays = 28;
		}
		break;
	}

	return nNumOfDays;
}

function laNgayHopLe(ngay,thang,nam)
{
	var bResult = true; 


	if (!(nam >= 1812 && nam<=2012 && thang))
	{
		bResult = false; 
	}

	
	if (!(thang >= 1 && thang <= 12))
	{
		bResult = false; 
	}

	
	if (!(ngay >= 1 && ngay <= tinhSoNgayTrongThang(thang, nam)))
	{
		bResult = false; 
	}

	return bResult;
}

function timNgayHomSau(ngay, thang, nam) {
    ngay++;
    if (ngay > tinhSoNgayTrongThang(thang, nam)) {
      ngay = 1;
      thang++;
      if (thang > 12) {
        thang = 1;
        nam++;
      }
    }
    return [ngay, thang, nam];
  }

  function Tinhnextday() {
    var ngay = parseInt(ngayInput.value);
    var thang = parseInt(thangInput.value);
    var nam = parseInt(namInput.value);
    if (laNgayHopLe(ngay, thang, nam)) {
      var [tmrngay, tmrthang, tmrnam] = timNgayHomSau(ngay, thang, nam);

      nextdayOutput.textContent = `Ngày hôm sau : ${tmrngay}/ ${tmrthang}/ ${tmrnam} `;
    } else {
      nextdayOutput.textContent = `Ngày không hợp lệ `;
    }
  }

function Xoanextday() {
    ngayInput.value = '';
    thangInput.value = '';
    namInput.value = '';
    ngayInput.focus();
    nextdayOutput.textContent = `Kết quả :`;
  }
  
// bai tam giac

function kiemtra(a, b, c){
	if((a <b+c) && (b < a+c) && (c < a+b) ){
		return true;
	}
	else return false;
}

function tinhtamgiac(){
    const a = parseInt(aInput.value);
    const b = parseInt(bInput.value);
    const c = parseInt(cInput.value);
    if( kiemtra(a,b,c)) {
        if( a==b && a == c) {
            tamgiacOutput.textContent = `Tam giác đều`;
        }
        else if((a==b) || (a==c) || (b==c)) {
            tamgiacOutput.textContent = `Tam giác cân`;
            
        }
        else if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b) {
            tamgiacOutput.textContent = `Tam giác vuông`;
            
        }
        else   tamgiacOutput.textContent = `Tam giác thường`;
    }
    else tamgiacOutput.textContent = `Không phải tam giác`;
}
function Xoatamgiac() {
    aInput.value = '';
    bInput.value = '';
    cInput.value = '';
    aInput.focus();
    tamgiacOutput.textContent = `Kết quả :`;
  }


  tinhButton.addEventListener('click', TinhHoahong);
  xoaButton.addEventListener('click', XoaHoahong);
  nextday_btn_tinh.addEventListener('click', Tinhnextday);
  nextday_btn_xoa.addEventListener('click', Xoanextday);
  tamgiac_btn_tinh.addEventListener('click', tinhtamgiac);
  tamgiac_btn_xoa.addEventListener('click', Xoatamgiac);
