var mang=[
{"birthday":"2023-05-28T17:40:23.974Z","name":"Marlene Trantow","address":"08352","phoneNumber":"795.889.7185","gender":true,"id":"1"},
{"birthday":"2023-05-29T01:32:28.094Z","name":"Charlotte Willms PhD","address":"527","phoneNumber":"1-674-509-4281","gender":true,"id":"2"},
{"birthday":"2023-05-28T10:08:23.173Z","name":"Al Abernathy Sr.","address":"2506","phoneNumber":"635-220-9829 x7066","gender":true,"id":"3"},
{"birthday":"2023-05-28T23:39:32.113Z","name":"Mr. Danny Beer","address":"5713","phoneNumber":"1-759-247-5965 x7435","gender":true,"id":"4"},
{"birthday":"2023-05-28T07:06:55.659Z","name":"Douglas Friesen","address":"5323","phoneNumber":"787-716-6200 x84833","gender":false,"id":"5"},
{"birthday":"2023-05-28T09:01:22.250Z","name":"Derek Konopelski","address":"7484","phoneNumber":"548-426-8396 x753","gender":false,"id":"6"},
{"birthday":"2023-05-28T06:38:39.318Z","name":"Dr. Melanie Frami","address":"3501","phoneNumber":"1-970-656-3518","gender":false,"id":"7"},
{"birthday":"2023-05-28T10:39:47.988Z","name":"Homer Lemke V","address":"62617","phoneNumber":"1-268-477-7594 x22729","gender":true,"id":"8"},
{"birthday":"2023-05-28T02:21:06.381Z","name":"Stacey Wintheiser","address":"206","phoneNumber":"558.813.2124 x5305","gender":true,"id":"9"},
{"birthday":"2023-05-28T06:14:53.320Z","name":"Dr. Marcella Leannon","address":"6703","phoneNumber":"289.222.7989","gender":false,"id":"10"}];

var length = mang.length;
var content = document.querySelector("tbody");
function HienThi()
{
  for(var i=0; i < length; i++)
  {
    if(mang[i].gender==true)
    {
        var gt="Nam";
    }else{
        var gt="Nữ";
    }
      
      var test = new Date(mang[i].birthday)
      var ns = test.toLocaleDateString("vi-VN")
      content.innerHTML +=`
       <tr>
        <td>${mang[i].id}</td>
        <td>${mang[i].name}</td>
        <td>${ns}</td>
        <td>${mang[i].address}</td>
        <td>${mang[i].phoneNumber}</td>
        <td>${gt}</td>
        
        <td>
          <button  onclick=Delete(${mang[i].id}) >Xóa</button>
          <button  onclick=hienthi_truoc_update(${mang[i].id})>Sửa</button>
        </td>
      </tr>
      `
  }
}
HienThi();
var ID=mang.length+1;
function Add(){
  
  var ht = document.getElementById("txtten");
  var nsinh = document.getElementById("txtns");
  var dc = document.getElementById("txtdc");
  var sdt = document.getElementById("txtsdt");
  var Nam = document.getElementById("nam");
  var Nu = document.getElementById("nu");
  if(ht.value=="")
  {
    alert("Bạn chưa nhập họ tên!!");
  }else
  if(nsinh.value=="")
  {
    alert("Bạn chưa chọn ngày!!!");
  }else
  if(dc.value=="")
  {
    alert("Bạn chưa nhập địa chỉ!!!");
  }else
  if(sdt.value=="")
  {
    alert("Bạn chưa nhập số điện thoại!!!");
  }else
  if(Nam.checked==false && Nu.checked==false)
  {
    alert("Bạn chưa chọn giới tính!!!");
  }else
  {
    if(Nam.checked)
    {
      var gioitinh="Nam"
    }
    else{
      var gioitinh="Nữ"
    }
   
    
    var  date= new Date(nsinh.value);
    var ns = date.toLocaleDateString("vi-VN")
      mang.push({
          birthday: ns,
          name: ht.value,
          address: dc.value,
          phoneNumber: sdt.value,
          gender: gioitinh,
          id: ID
      });
  
      content.innerHTML +=` 
      <tr>
        <td>${ID}</td>
        <td>${ht.value}</td>
        <td>${ns}</td>
        <td>${dc.value}</td>
        <td>${sdt.value}</td>
        <td>${gioitinh}</td>
       
      <td>
        <button onclick=Delete(${ID})>Xóa</button>
        <button onclick=hienthi_truoc_update(${ID}) >Sửa</button>
      </td>
      </tr>`
      ID++;
  }
  
   
  }
  var HT = document.getElementById("txtten");
  var NS = document.getElementById("txtns");
  var DC = document.getElementById("txtdc");
  var SDT = document.getElementById("txtsdt");
  var NAM = document.getElementById("nam");
  var NU = document.getElementById("nu");
  ////////////////////////
  function hienthi_truoc_update(id){
      
    var i=0;
    for(; i< length; i++)
    {
       var date = new Date(mang[i].birthday)
        var ngay = date.getDate();
        var thang = date.getMonth()+1;
        var nam = date.getFullYear();
        var date_format = `${thang}/${ngay}/${nam}`;
        if(mang[i].id  == id)
        {
            HT.value = mang[i].name;
            NS.value = date_format;
            DC.value = mang[i].address;
            SDT.value = mang[i].phoneNumber;
            if( mang[i].gender == true)
              NAM.checked = true;
            else
              NU.checked = true;
            break;
          }
        }
        var sua = document.getElementById("buttonSua");
        sua.setAttribute("onclick", `update(${mang[i].id})`);
      }
function update(id)
{
        if(HT.value=="")
  {
    alert("Bạn chưa nhập họ tên!!");
  }else
  if(NS.value=="")
  {
    alert("Bạn chưa chọn ngày!!!");
  }else
  if(DC.value=="")
  {
    alert("Bạn chưa nhập địa chỉ!!!");
  }else
  if(SDT.value=="")
  {
    alert("Bạn chưa nhập số điện thoại!!!");
  }else
  if(NAM.checked==false && NU.checked==false)
  {
    alert("Bạn chưa chọn giới tính!!!");
  }else{
    var i=0
    var gioitinh="KXD";
        for(; i<length; i++)
        {
          if(mang[i].id == id)
          {
            mang[i].name=HT.value
           mang[i].birthday=NS.value;
            mang[i].address=DC.value;
            mang[i].phoneNumber=SDT.value;
            if(NAM.checked)
            {
              gioitinh="Nam";
            }
            if(NU.checked)
            {
               gioitinh="Nữ";
            }
            
           mang[i].gender = gioitinh;
            break;
          }
          
        }
        
        var date = new Date(mang[i].birthday)
        var ngay = date.getDate();
        var thang = date.getMonth()+1;
        var nam = date.getFullYear();
        var date_format = `${ngay}/${thang}/${nam}`;
        
        var hienthi = document.querySelectorAll("tr")[id].querySelectorAll("td")
        hienthi[1].innerHTML = `${HT.value}`
         hienthi[2].innerHTML =`${date_format}`
        hienthi[3].innerHTML = `${DC.value}`
        hienthi[4].innerHTML = `${SDT.value}`
        hienthi[5].innerHTML = `${gioitinh}`
  }
    
      }
      
  function Delete(id) {
    var getTR = Array.from(document.getElementsByTagName("tr"));
    for(var i=0; i<length; i++)
    {
      if(mang[i].id == id)
      {
       mang.splice(i,1);
        getTR[i+1].remove();
      }
   }
}
