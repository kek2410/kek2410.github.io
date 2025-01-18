/*
'�� �� �� : js_01.js
'�� �� �� : �̼���
'�� �� �� : 2006.06.01
'��    �� : ������ �Է°� üũ
'�������� :  ����
'  ������ :  ����
'  ������ :  ����
*/
 
function isNull(obj, msg) {
	if(obj.value == "") {
		if(msg) {
			alert(msg);
		}
		obj.focus();
		return true;
	}
	return false;
}

function isNumber(obj) {
	var str = obj.value;
	if(str.length == 0)

		return false;

	for(var i=0; i < str.length; i++) {
		if(!('0' <= str.charAt(i) && str.charAt(i) <= '9'))
			return false;
	}

	return true;
}

function isSame(obj1, obj2) {
	var str1 = obj1.value;
	var str2 = obj2.value;
	if(str1.length == 0 || str2.length == 0)
		return false;

	if(str1 == str2)
		return true;
	return false;
}

function isShort(obj, len, msg) {
	var str = obj.value;
	if(str.length < len) {
		if(msg) {
			alert(msg);	
		}
		obj.focus();
		obj.select();
		return true;
	}
	return false;
}

function isAlphabet(obj) {
	var str = obj.value;
	if(str.length == 0)
		return false;

	str = str.toUpperCase();
	for(var i=0; i < str.length; i++) {
		if(!('A' <= str.charAt(i) && str.charAt(i) <= 'Z'))
			return false;
	}
	return true;
}

function isAlphaNumeric(obj) {
	var str = obj.value;
	if(str.length == 0)
		return false;

	str = str.toUpperCase();
	for(var i=0; i < str.length; i++) {
		if(!(('A' <= str.charAt(i) && str.charAt(i) <= 'Z') ||
			('0' <= str.charAt(i) && str.charAt(i) <= '9')))
			return false;
	}
	return true;
}

function isID(obj) {
	var str = obj.value;
	if(str.length == 0)
		return false;

	str = str.toUpperCase();
	if(!('A' <= str.charAt(i) && str.charAt(i) <= 'Z'))
		return false;

	for(var i=1; i < str.length; i++) {
		if(!(('A' <= str.charAt(i) && str.charAt(i) <= 'Z') ||
			('0' <= str.charAt(i) && str.charAt(i) <= '9') ||
			(str.charAt(i) == '_')))
			return false;
	}
	return true;
}


function checkFloat(obj, msg) {
	obj.value = TrimString(obj.value);
	
	if(obj.value != "" && IsContained(obj.value, _NUMBER_ | _DOT_) == false) {
		if(msg) {
			alert(msg);
		}
		obj.focus();
		return true;
	}
	return false;
}
 

function isCardNumber(obj) {
	var str = obj.value;
	if(str.length != 16)
		return false;

	for(var i=0; i < 16; i++) {
		if(!('0' <= str.charAt(i) && str.charAt(i) <= '9')) 
			return false;
	}
	return true;
}
function checkRadio(radioArray){
	for(i=0 ; i < radioArray.length ; i++){ 	
		if (radioArray[i].checked==true) {
			return true;
		} 
	} 
	return false;

} 
 
function isEmail(obj)  {
var emailPat=/^(.+)@(.+)$/
var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
var validChars="\[^\\s" + specialChars + "\]"
var firstChars=validChars
var quotedUser="(\"[^\"]*\")"
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
var atom="(" + firstChars + validChars + "*" + ")"
var word="(" + atom + "|" + quotedUser + ")"
var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")

var matchArray=obj.match(emailPat)
if (matchArray==null) {
    messenge("Ȯ��","�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�.\n Ȯ�� �� ���� ���ּ���.",300,200 );
	return false;
}
var user=matchArray[1]
var domain=matchArray[2]

if (user.match(userPat)==null) {
    messenge("Ȯ��","�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�.\n Ȯ�� �� ���� ���ּ���.",300,150 );
    return false
}

var IPArray=domain.match(ipDomainPat)
if (IPArray!=null) {
	  for (var i=1;i<=4;i++) {
	    if (IPArray[i]>255) {
	        messenge("Ȯ��","�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�.\n Ȯ�� �� ���� ���ּ���.",300,150 );
		return false
	    }
    }
    return true
}

var domainArray=domain.match(domainPat)
if (domainArray==null) {
    messenge("Ȯ��","�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�.\n Ȯ�� �� ���� ���ּ���.",300,200 );
    return false
}

var atomPat=new RegExp(atom,"g")
var domArr=domain.match(atomPat)
var len=domArr.length
if (domArr[domArr.length-1].length<2 || 
    domArr[domArr.length-1].length>3) {
   messenge("Ȯ��","�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�.\n Ȯ�� �� ���� ���ּ���.",300,200 );
   return false
}

if (domArr[domArr.length-1].length==1 && len<2) {
   messenge("Ȯ��","�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�.\n Ȯ�� �� ���� ���ּ���.",300,200 );
   return false
}

if (domArr[domArr.length-1].length==3 && len<2) {
   messenge("Ȯ��","�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�.\n Ȯ�� �� ���� ���ּ���.",300,200 );
   return false
}
return true;
}


//////////////////////// ��� ��  ///////////////

function numchk2(num) {
    num = new String(num);

    var sign = "";
    if (isNaN(num)) {
        alert("���ڸ� �Է��� �� �ֽ��ϴ�.");
        return '';
    }
    if (num == 0) {
        return num;
    }
    if (num < 0) {
        num = num * (-1);
        sign = "-";
    }
    else {
        num = num * 1;
    }

    return num;
}

function numchk3(num) {
    num = new String(num);

    var sign = "";
    if (isNaN(num)) {
        alert("���ڸ� �Է��� �� �ֽ��ϴ�.");
        return '';
    }
  

    return num;
}


function number_check() {
    var txt = window.event.keyCode
    if ((txt >= 48 && txt <= 57) || (txt >= 37 && txt <= 40) || (txt >= 96 && txt <= 105) || (txt == 46) || (txt == 8) || (txt == 9) ) {
        window.event.returnValue = true
    } else { window.event.returnValue = false }
}

function float_check() {
    var txt = window.event.keyCode
    if ((txt >= 48 && txt <= 57) || (txt >= 37 && txt <= 40) || (txt >= 96 && txt <= 105) || (txt == 46) || (txt == 8) || (txt == 9) || (txt == 110)) {
        window.event.returnValue = true
    } else { window.event.returnValue = false }
}



//////////////////////// ��� �� ��  ///////////////

// "-" �߰� : 3148139835(10�ڸ�) => 314-81-39835(12�ڸ�)
function Add_AccDash( AccNum )
{
    var Acc = "";

    if(AccNum.value.length < 11) return;

    // ���� ���� "-"�� �ִٸ�
    for(var x = 0; x < AccNum.value.length ; x++)
    {
        ch = AccNum.value.substring(x,x+1);
        if( ch == "-") return;
    }
    Acc =  AccNum.value.substring(0,3);
    Acc += "-";
    Acc += AccNum.value.substring(3,5);
    Acc += "-";
    Acc += AccNum.value.substring(5,11);
    AccNum.value = Acc;
	return;
}

// "-" ���� :  314-81-39835(12�ڸ�) => 3148139835(10�ڸ�)
function Del_AccDash( AccNum )
{
    var  x, ch;
    var  i=0;
    var  newVal="";

    for(x = 0; x < AccNum.value.length ; x++)
    {
        ch= AccNum.value.substring(x,x+1);
        if( ch != "-") newVal += ch;
    }
    AccNum.value = newVal;
    return;
}

// �ݾ� �Է½� "," �ڵ� �Է� & ���� ���� & �Ҽ��� 2�ڸ�
function Add_Comma( thisCtrl )
{
    var src;
    var i; 
    var point = -1;
    var sPoint;
	var oCtrl;

	if(thisCtrl) oCtrl = thisCtrl;
    else oCtrl = this.ctl;

    point = oCtrl.value.lastIndexOf(".");
    if( point == -1 )   sPoint = ".00";
    else
    {
        sPoint = oCtrl.value.substring( point, oCtrl.value.length );
        oCtrl.value = oCtrl.value.substring( 0, point );
        if( sPoint.length > 3 ) {
			alert( "�Ҽ������� 2�ڸ��� �Է°��� �մϴ�." );
			npoint = ".00";
        }
    }
	Add_MoneyComma( oCtrl );

    oCtrl.value = oCtrl.value + sPoint; 
    return true; 
}

// �ĸ�(",") �ڵ� ����
function Del_Comma( thisCtrl )
{
    var  x, ch;
    var  i=0;
    var  newVal="";
	var  oCtrl;

	if(thisCtrl) oCtrl = thisCtrl;
    else oCtrl = this.ctl;

    for(x = 0; x < oCtrl.value.length ; x++)
    {
        ch= oCtrl.value.substring(x,x+1)
        if( ch != ",")  newVal += ch;
    }
             
    oCtrl.value =  newVal;
    return true;
}

// �ĸ�(",") �ڵ� ����
function Del_FComma( thisCtrl )
{
    var  x, ch;
    var  i=0;
    var  newVal="";
	var  oCtrl;

	if(thisCtrl) oCtrl = thisCtrl;
    else oCtrl = this.ctl;

    for(x = 0; x < oCtrl.value.length ; x++)
    {
        ch= oCtrl.value.substring(x,x+1)
        if( ch != ",")  newVal += ch;
    }
             
    oCtrl.value =  newVal;
    return true;
}

// �ݾ� �Է½� "," �ڵ� �Է� & ���� ���� 
function Add_MoneyComma( Name )
{
    var src;
    var i; 
    var	factor; 
    var	su; 
    var	SpaceSize = 0;

    factor = Name.value.length % 3; 
    su     = (Name.value.length - factor) / 3;
    src    =  Name.value.substring(0,factor);

    for(i=0; i < su ; i++)
    {
		if((factor == 0) && (i == 0))       // "XXX" �ΰ��
		{
			src += Name.value.substring(factor+(3*i), factor+3+(3*i));  
		}
	    else
		{
		    src += ","  ;
			src += Name.value.substring(factor+(3*i), factor+3+(3*i));  
		}
    }
    Name.value = src; 

    return true; 
}


// �ĸ�(",") �ڵ� ����
function Del_MoneyComma( Name )
{
    var  x, ch;
    var  i=0;
    var  newVal="";

    for(x = 0; x < Name.value.length ; x++){
    	ch= Name.value.substring(x,x+1);
		if( ch != ",")  newVal += ch;
    }     
    Name.value =  newVal;
    return true;
}

//   ����(" ") �ڵ� ����
function Del_Space( Name )
{

    var  x, ch;
    var  i=0;
    var  newVal="";

    for(x = 0; x < Name.value.length ; x++){

		ch= Name.value.substring(x,x+1);
		if( ch != " ") newVal += ch;
    }    
    Name.value =  newVal;
    return  true;
}
   
 
// �ֹ� ����ڹ�ȣ "-" �߰� 
function Add_JuminDash( oCtl )
{
    var newVal  = "";

    if(oCtl.value.length == 10)
    {
        newVal = oCtl.value.substring(0,3);
        newVal += "-";
        newVal += oCtl.value.substring(3,5);
        newVal += "-";
        newVal += oCtl.value.substring(5,10);
		oCtl.value = newVal;
    }
    else if(oCtl.value.length == 13){
        newVal += oCtl.value.substring(0,6);
        newVal += "-";
        newVal += oCtl.value.substring(6,13);
		oCtl.value = newVal;
    }
}

// "-" ���� 
function Del_JuminDash(thisCtl)
{
    var  i;
    var  newVal="";
	var  oCtl;

	if(thisCtl) oCtl = thisCtl;
    else oCtl = this.ctl;

    for(i = 0; i < oCtl.value.length ; i++){
        if( oCtl.value.charAt(i) != '-') newVal += oCtl.value.charAt(i);
    }
    oCtl.value = newVal;
    return true;
}

// "." �߰� : 961230(6�ڸ�) => 1996.12.30(10�ڸ�)
function Add_DatePoint( date )
{
    var newVal  = "";
    var Year = "";


    if(date.value.length < 8) return;
    if(date.value.length == 8)
    {
        newVal = date.value.substring(0,4);
        newVal += ".";
        newVal += date.value.substring(4,6);
        newVal += ".";
        newVal += date.value.substring(6,8);
    }
    else{
        // ���� ���� "."�� �ִٸ�
        for(var x = 0; x < date.value.length ; x++){
               ch= date.value.substring(x,x+1);
               if( ch == ".") return;
        }

        newVal += date.value.substring(0,4);
        newVal += ".";
        newVal += date.value.substring(4,6);
        newVal += ".";
        newVal += date.value.substring(6,8);
    }
    date.value = newVal;
	return;
}
// "-" �߰� : 961230(6�ڸ�) => 1996-12-30(10�ڸ�)
function Add_DatePoint2( date )
{
    var newVal  = "";
    var Year = "";


    if(date.value.length < 8) return;
    if(date.value.length == 8)
    {
        newVal = date.value.substring(0,4);
        newVal += "-";
        newVal += date.value.substring(4,6);
        newVal += "-";
        newVal += date.value.substring(6,8);
    }
    else{
        // ���� ���� "-"�� �ִٸ�
        for(var x = 0; x < date.value.length ; x++){
               ch= date.value.substring(x,x+1);
               if( ch == "-") return;
        }

        newVal += date.value.substring(0,4);
        newVal += "-";
        newVal += date.value.substring(4,6);
        newVal += "-";
        newVal += date.value.substring(6,8);
    }
    date.value = newVal;
	return;
}
// "." ���� : 1996.12.30(10�ڸ�) => 961230(6�ڸ�)
function Del_DatePoint(date)
{
    var  x, ch;
    var  i=0;
    var  newVal="";

    if( date.value.length != 10 ) return;
    for(x = 0; x < date.value.length ; x++){
        ch= date.value.substring(x,x+1);
        if( ch != ".") newVal += ch;
    }
    date.value = newVal;
    return;
}
// "-" ���� : 1996-12-30(10�ڸ�) => 961230(6�ڸ�)
function Del_DatePoint2(date)
{
    var  x, ch;
    var  i=0;
    var  newVal="";

    if( date.value.length != 10 ) return;
    for(x = 0; x < date.value.length ; x++){
        ch= date.value.substring(x,x+1);
        if( ch != "-") newVal += ch;
    }
    date.value = newVal;
    return;
}
function Chk_Date_Seq( date1, date2 )
{
	if( date1.value > date2.value)
	{
	    if( date2.value.length != 0) //�������� ���Է��̸� ������ �ƴϸ� ����
		{
		     alert ("�������� ������ ���� �ʽ��ϴ�.");
			 return false;
        }
    	 else return true;
    }
	else return true;
}

// ":" �߰� : 1545(4�ڸ�) => 15:45(5�ڸ�)
function Add_TimeColon(time)
{
	var Time = "";

	if(time.value.length < 4) return;
	if(time.value.length == 4)
	{
		Time = time.value.substring(0,2);
		Time += ":";
		Time += time.value.substring(2,4);
	}
	else{
		//���� ���� ":"�� �ִٸ�
		for(var x=0; x <time.value.length; x++)
		{
			ch=time.value.substring(x,x+1);
			if(ch == ":")
				return;
		}
		Time = time.value.substring(0,2);
        Time += ":";
        Time += time.value.substring(2,4);
	}
	time.value = Time;
	return;
}

//":" ���� : 15:45(5�ڸ�) => 1545(4�ڸ�)
function Del_TimeColon(time)
{
	var x,ch;
	var i=0;
	var newVal="";

	/*if(time.value.length !=10) return;*/

	for(x=0; x<time.value.length ; x++){
		ch=time.value.substring(x,x+1);
		if(ch != ":") newVal += ch;
	}
	time.value = newVal;
	return;
} 

function  Chk_Date( thisform )
{
	var dFlag = false;
	var nLen = 8;

	if(Check.datelen == 0) return true;
	else nLen = Check.datelen;
    // ��ȸ�� üũ
    for(var i = 0; i< this.ctl.length; i++ ){
		if(this.form.elements[this.ctl[i]].value.length == 5) Del_MonthPoint(this.form.elements[this.ctl[i]]);
		else Del_DatePoint(this.form.elements[this.ctl[i]]);
		if(!Chk_Date_Useable(this.form.elements[this.ctl[i]], nLen)) return false;
    }
	
	// �������� �����Ϻ��� �ʴ� ��� üũ
	if( i == 2 && dFlag && nLen == 8){
		if(!Chk_Date_Seq(this.form.elements[this.ctl[0]],this.form.elements[this.ctl[1]]))
	        return false;
	}
	return  true;
}

// �ð� üũ
function Chk_Time(TimeStr)
{
	var Hour,Min;
	var oCtrl;
	var i;
	var sValue = new Array("","");

	for(i = 0; i < this.ctl.length; i++){
		oCtrl = this.form.elements[this.ctl[i]];
		Del_TimeColon(oCtrl);
		if( oCtrl.value.length == 0) {
			if( Check.tiemlen > 0 ) {
				alert( "�ð��� ������� �����̽��ϴ�." );
				oCtrl.focus();
				return false ;
			}
			else return true ;
		}

		if(oCtrl.value.length < 4) {
			alert ("�ð��� ��Ȯ�� �Է��Ͽ� �ֽʽÿ�.");
			oCtrl.focus();
			return false;
		}

		Hour = parseInt(oCtrl.value.substring(0,2),10);
		if(Hour < 0 || Hour > 23) {
			alert ("�ð��� Ȯ���Ͽ� �ֽʽÿ�.");
			oCtrl.focus();
			return false;
		}

		Min = parseInt(oCtrl.value.substring(2,4),10);
		if(Min < 0 || Min > 59) {
		   alert ("���� Ȯ���Ͽ� �ֽʽÿ�.");
		   oCtrl.focus();
		   return false;
		}
		sValue[i] = oCtrl.value;
	}
	if(i == 2){
		if( sValue[0].value > sValue[1].value) {
			alert ("���۽ð��� ����ð����� �ʽ��ϴ�.") ;
			return false ;
		}
	}
	return true;
}

function Chk_Date_Useable( DateStr, nLen )
{
    var Year;
    var nMonth;
    var Day;

    if(DateStr.value.length == 0){
        alert ("��¥(����)�� ��Ȯ�� �Է��Ͽ� �ֽʽÿ�.") ;
        return false;
	}

    // ���ڿ��� �� ���� Ȯ��
    if(DateStr.value.length < nLen ){
        alert ("��¥(����)�� ��Ȯ�� �Է��Ͽ� �ֽʽÿ�.") ;
        return false ;
    }

	if(nLen == 8){
		// �⵵Ȯ��  1989 < Year < 2010
		Year = parseInt(DateStr.value.substring(0,4),10);
		if(Year <= 1989 || Year >= 2100){
			alert ("��ȸ �⵵�� Ȯ���Ͽ� �ֽʽÿ�. (1990 - 2100)") ;
			DateStr.focus();
			return false ;
		}
		lM = 4;
	}
	else if(nLen == 4){
		var Today = new Date();
		Year = Today.getYear();
		lM=0;
	}
	else {
        alert ("������� ��Ȯ�� �Է��Ͽ� �ֽʽÿ�. (YYYYMMDD)") ;
		return false;
	}

    // ��Ȯ��    1 <= Month <= 12
    nMonth = parseInt(DateStr.value.substring(lM,lM+2),10);
    if((nMonth <= 0 ) || (nMonth >= 13)){
        alert ("��ȸ ���� Ȯ���Ͽ� �ֽʽÿ�. (1 - 12)") ;
        DateStr.focus();
        return false ;
    }

	var total_days;
	if(nMonth == 1) total_days = 31;
	else if(nMonth == 2) {
		if(((Year % 4 == 0) && (Year % 100 != 0)) || (Year % 400 == 0))
			 total_days = 29;
        else total_days = 28;
    }
	else if(nMonth == 3) total_days = 31;
	else if(nMonth == 4) total_days = 30;
	else if(nMonth == 5) total_days = 31;
	else if(nMonth == 6) total_days = 30;
	else if(nMonth == 7) total_days = 31;
	else if(nMonth == 8) total_days = 31;
	else if(nMonth == 9) total_days = 30;
	else if(nMonth == 10) total_days = 31;
	else if(nMonth == 11) total_days = 30;
	else if(nMonth == 12) total_days = 31;

	Day = parseInt(DateStr.value.substring(lM+2,lM+4),10);
	if(Day <= 0 || Day > total_days){
	   alert ("���ڸ� Ȯ���Ͽ� �ֽʽÿ�. (1 - 31)");
	   DateStr.focus();
	   return false;
    }
    return true;
}

function Add_MonthPoint(date)
{
	if(date.value.length == 4){
		newVal = date.value.substring(0, 2) + "." + date.value.substring(2);
		date.value = newVal;
	}
	return;
}

function Del_MonthPoint(date)
{
	if(date.value.length == 5){
		newVal = date.value.substring(0, 2) + date.value.substring(3);
		date.value = newVal;
	}
	return;
}
function event_onclick()
{
    if((event.button==2) || (event.button==3) || (event.keyCode == 93)){
        alert('���� ȭ�鿡���� ������ ���콺 ��ư�� ����� �� �����ϴ�.');
    }
    else {
        if((event.ctrlKey) && (event.keyCode == 67)) {
            alert('���� ȭ�鳻���� ������ �� �����ϴ�.');
        }
    }
}


//�ݾ׿� , ���..
function numchk(num){
    num=new String(num);
    num=num.replace(/,/gi,"");
    return numchk1(num);
}


function numchk1(num){
    var sign="";
    if(isNaN(num)) {
        alert("���ڸ� �Է��� �� �ֽ��ϴ�.");
        return 0;
    }
    if(num==0) {
        return num;
    }

    if(num<0){
        num=num*(-1);
        sign="-";
    }
    else{
        num=num*1;
    }
    num = new String(num)
    var temp="";
    var pos=3;
    num_len=num.length;
    while (num_len>0){
        num_len=num_len-pos;
        if(num_len<0) {
            pos=num_len+pos;
            num_len=0;
        }
        temp=","+num.substr(num_len,pos)+temp;
    }
    return sign+temp.substr(1);
}


//  onKeyUp="this.form.han5.value=Number(this.value).read()"  onclick="this.forms.recommend_pay.value = number_format_reset(this.value)" onblur="this.forms.recommend_pay.value=number_format(this.value)"> ��
//���ڸ� �ѱ۷� ��ȯ���ֱ�
Number.prototype.read = function () {
    //if (this == 0) return '��';
    if (this == 0) return '';
    var phonemic = ['', '��', '��', '��', '��', '��', '��', 'ĥ', '��', '��'];
    var unit = ['', '', '��', '��', 'õ', '��', '�ʸ�', '�鸸', 'õ��', '��', '�ʾ�', '���', 'õ��', '��', '����', '����'];

    var ret = '';
    var part = new Array();
    for (var x = 0; x < String(this).length; x++) part[x] = String(this).substring(x, x + 1);
    for (var i = 0, cnt = String(this).length; cnt > 0; --cnt, ++i) {
        p = phonemic[part[i]];
        p += (p) ? (cnt > 4 && phonemic[part[i + 1]]) ? unit[cnt].substring(0, 1) : unit[cnt] : '';
        ret += p;
    }

    return ret + " ��";
}


function trans_han(sour, targ){ 
	s = document.getElementsByName(sour)[0].value; 
	t = document.getElementById(targ); 
	if(s.length > 16){ 
		t.innerHTML = '���ڰ� �ʹ� Ů�ϴ�'; 
		document.getElementsByName(sour)[0].value = 0;
		return; 
	} else if(isNaN(s)){ 
		t.innerHTML = '���ڰ� �ƴմϴ�'; 
		document.getElementsByName(sour)[0].value = 0;
		return; 
	} 

	b1 = ' ���̻�����ĥ�ȱ�'; 
	b2 = 'õ�����õ��ʾ�õ��ʸ�õ��ʿ�'; 
	tmp = ''; 
	cnt = 0; 
if (s == 0){
	tmp = "����";
}else{
	while(s != ''){ 
	cnt++; 
		tmp1 = b1.substring(s.substring(s.length-1,s.length), Number(s.substring(s.length-1,s.length))+1); // ���� 
		tmp2 = b2.substring(b2.length-1,b2.length); // ���� 
	if(tmp1==' '){ // ���ڰ� 0�϶� 
		if(cnt%4 == 1){ // 4�ڸ��� ���� ��,��,��,�� �����϶��� �ٿ��� 
			tmp = tmp2 + tmp; 
		} 
		} else{ 
			if(tmp1 == '��' && cnt%4 != 1){ // ������ ��,��,��,���϶��� ���ڰ� ���� �ٿ��ְ� �������� ���� ex) ����Ͻʸ�=> ���ʸ� 
			tmp = tmp2 + tmp; 
			} else{ 
				tmp = tmp1 + tmp2 + tmp; // �׿ܿ��� ������ ���� ��� �ٿ��� 
			} 
		} 
			b2 = b2.substring(0, b2.length-1); 
			s = s.substring(0, s.length-1); 
		} 
}

		tmp = tmp.replace('�︸','��').replace('����','��'); // ��,��,��,�� ������ ��� �ٿ��� ������ �ʿ���� ���� ���� 
		t.innerHTML = tmp; 
} 

//�����Է¼� �޸� �ٿ��ֱ�
function number_format(numstr) {
    var numstr = String(numstr);
    var re0 = /(\d+)(\d{3})($|\..*)/;
    if (re0.test(numstr))
        return numstr.replace(
        re0,
        function (str, p1, p2, p3) { return number_format(p1) + "," + p2 + p3; }
       );
    else
        return numstr;
}

//�����Է¼� �޸������ϱ�
function number_format_reset(numstr) {
    //return numstr.replace(",","");
    var price = numstr; // �Ѿ�� ���� ������ �Ҵ�
    var len = numstr.length;  // �Ѿ�°��� ���̸� ����

    for (i = 0; i < len; i++) {
        price = price.replace(",", "");
    }

    return price;
}

function moncom(mon) {
    var factor = mon.length % 3;
    var su     = (mon.length - factor) / 3;
    var com    =  mon.substring(0,factor);

    for(var i=0; i < su ; i++) {
        if((factor == 0) && (i == 0)) {
            com += mon.substring(factor+(3*i), factor+3+(3*i));
        }
        else {
            com += ","  ;
            com += mon.substring(factor+(3*i), factor+3+(3*i));
        }
    }
    document.write(com);
}

 
///// ���� ���� �޺� �ϼ� Return /////
function jsDaysPerMonth()
{
    var DOMonth  = new Array("31","28","31","30","31","30","31","31","30","31","30","31");
    var IDOMonth = new Array("31","29","31","30","31","30","31","31","30","31","30","31");
    if ( (arguments[0]%4) == 0 )
    {
        if ( (arguments[0]%100) == 0 && (arguments[0]%400) != 0 )
            return DOMonth[arguments[1]-1];
        return IDOMonth[arguments[1]-1];
    }
    else
        return DOMonth[arguments[1]-1];
}

///// Date Check /////
function jsDate()
{
    var vDate = arguments[0];
    var vGubun = arguments[1];          //yyyymmdd, yyyymm, yyyy
    
    var vYear = 0;
    var vMon = 0;
    var vDay = 0;
    
    if ( jsNull(vDate) )
        return false;
    
    if ( vDate.length != vGubun.length )
    {
        alert(arguments[0].title);
        arguments[0].focus();
        return false;
    }
    else
    {
        if ( jsNumeric(vDate) )
        {
            switch(vGubun)
            {
                case "yyyy"    :    return true;
                                    break;
                case "yyyymm"  :    vMon = parseInt(vDate.substr(4,2));
                                    if ( (vMon > 12) || (vMon < 0) )
                                    {
                                        alert("���� �ٽ� �Է��ϼ���");
                                        arguments[0].focus();
                                        return false;
                                    }
                                    break;
                case "yyyymmdd":    vYear = parseInt(vDate.substr(0,4));
                                    vMon = parseInt(vDate.substr(4,2));
                                    vDay = parseInt(vDate.substr(6,2));
                                    if ( (vMon > 12) || (vMon < 0) )
                                    {
                                        alert("���� �ٽ� �Է��ϼ���");
                                        arguments[0].focus();
                                        return false;
                                    }
                                    if ( (vDay > jsDaysPerMonth(vYear, vMon)) || (vDay < 0) )
                                    {
                                        alert(vMon+"���� "+jsDaysPerMonth(vYear, vMon)+"�� ���� �ֽ��ϴ�. \n���ڸ� �ٽ� �Է��ϼ���.");
                                        arguments[0].focus();
                                        return false;
                                    }
                                    break;
                default:            break;
            }
        }
        else
        {
            alert("���ڸ� �Է��ϼ���.");
            arguments[0].focus();
            return false;
        }
    }
    return true;
}



function makeArray(n)
{
	this.length = n;
	for(var i=1; i<=n; i++)
		this[i] = 0;
	return this;
}

//  �ֹε�Ϲ�ȣ üũ
num = new makeArray(13);
digit = new makeArray(12);

digit[1] = 2
digit[2] = 3
digit[3] = 4
digit[4] = 5
digit[5] = 6
digit[6] = 7
digit[7] = 8
digit[8] = 9
digit[9] = 2
digit[10] = 3
digit[11] = 4
digit[12] = 5

function isSSN(obj1,obj2)
{
	 var str = obj1 + obj2;
	//����� �Է��� �ֹε�� ��ȣ�� �迭�� �ִ´�
	for(j=1; j<=13; j++)
	{
		num[j] = parseInt(str.charAt(j-1),10)
	}

	mm = num[3] + num[4];
	dd = num[5] + num[6];

	if ( !(mm < 13 && dd < 32) ) return false;

	// Y2K source start : 2000������ ������� �ֹε�� ��ȣ �Է��� ���� �κ�
	if (num[7] != 3 &&  num[7] != 4) {
		
		if (num[7] != "5" &&  num[7] != "6" &&  num[7] != "7" &&  num[7] != "8" &&  num[7] != "9" &&  num[7] != "0" ) {
			//����
					sum = 0;
				//check_digit�� ��ȣ�� �����Ѵ�
				for(i=1; i<=12; i++)
				{
					sum += digit[i] * num[i];
				}
				div = (sum%11);
				if(div == 1){
					comp = 0;
				}
				else if(div == 0){
					comp = 1;
				}
				else if((div != 0)&&(div != 1)){
					comp = 11 - div;
				}
				if(div == 0)
				{
					if(num[13] == 1)
						return true;
					else
						return false;
				}
				else if(div == 1)
				{
					if(num[13] == 0)
						return true;
					else
						return false;
				}
				else if((11-div) == num[13])
				{
					return true;
				}
				else
				{
					return false;
				}
		}else{
			//�ؿ�
		 

				   jumin_for(str);
				   
				    if (jumin_for(str) == false){
				    	return false;	
				     }else{
				     	return true;
				    }
				  
				  
		}
		 
	
	}
	else {
	 
	// 2000�� ���� ������� �ֹε�Ϲ�ȣ üũ ��ƾ 		
		if (num[3] != 0 && num[3] != 1) {
			return false;
		}
		else if (num[5] != 0 && num[5] != 1 && num[5] != 2 && num[5] != 3) {		
			return false;
		}
		else if (num[7] != 1 && num[7] != 2 && num[7] != 3 && num[7] != 4) {
			return false;
		}
		else if (num[3] == 0 && num[4] == 0) {		
			return false;
		}
		else if ((num[3] == 1) && (num[4] != 0 && num[4] != 1 && num[4] != 2)) {		
			return false;
		}
		else if (num[5] == 0 && num[6] == 0) {		
			return false;
		}
		else if (num[5] == 3 && (num[6] != 0 && num[6]  != 1)) {		
			return false;
		}
		else {
			return true;
		}
	}
	// Y2K Source end
}

function jumin_for(obj){
	var strjumin = obj;
	  if ((strjumin.charAt(6) == "5") || (strjumin.charAt(6) == "6"))
				    {
				       birthYear = "19";
				    }
				    else if ((strjumin.charAt(6) == "7") || (strjumin.charAt(6) == "8"))
				    {
				       birthYear = "20";
				    }
				    else if ((strjumin.charAt(6) == "9") || (strjumin.charAt(6) == "0"))
				    {
				       birthYear = "18";
				    }
				    else
				    {
				      alert("��Ϲ�ȣ�� ������ �ֽ��ϴ�. �ٽ� Ȯ���Ͻʽÿ�.");
				      return false;
				    }        
				    birthYear += strjumin.substr(0, 2);
				    birthMonth = strjumin.substr(2, 2) - 1;
				    birthDate = strjumin.substr(4, 2);
				    birth = new Date(birthYear, birthMonth, birthDate);
				    
				    if ( birth.getYear() % 100 != strjumin.substr(0, 2) ||
				         birth.getMonth() != birthMonth ||
				         birth.getDate() != birthDate) {
				    
				      return false;
				    }
				    
				    if (fgn_no_chksum(strjumin) == false){

				    	return false;	
				     }else{
				     	return true;
				    }
				  
}


function fgn_no_chksum(reg_no) {
	
    var sum = 0;
    var odd = 0;
    
    buf = new Array(13);
    for (i = 0; i < 13; i++) buf[i] = parseInt(reg_no.charAt(i));

    odd = buf[7]*10 + buf[8];
    
    if (odd%2 != 0) {
      return false;
    }

    if ((buf[11] != 6)&&(buf[11] != 7)&&(buf[11] != 8)&&(buf[11] != 9)) {
      return false;
    }
    	
    multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
    for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);


    sum=11-(sum%11);
    
    if (sum>=10) sum-=10;

    sum += 2;

    if (sum>=10) sum-=10;

    if ( sum != buf[12]) {
        return false;
    }
    else {
        return true;
    }
}


function isSSN2(obj1)
{
	 var str = obj1 ;
	 
	//����� �Է��� �ֹε�� ��ȣ�� �迭�� �ִ´�
	for(j=1; j<=13; j++)
	{
		num[j] = parseInt(str.charAt(j-1),10)
	}

	mm = num[3] + num[4];
	dd = num[5] + num[6];

	if ( !(mm < 13 && dd < 32) ) return false;

	// Y2K source start : 2000������ ������� �ֹε�� ��ȣ �Է��� ���� �κ�
	if (num[7] != 3 &&  num[7] != 4) {
		sum = 0;
		//check_digit�� ��ȣ�� �����Ѵ�
		for(i=1; i<=12; i++)
		{
			sum += digit[i] * num[i];
		}
		div = (sum%11);
		if(div == 1){
			comp = 0;
		}
		else if(div == 0){
			comp = 1;
		}
		else if((div != 0)&&(div != 1)){
			comp = 11 - div;
		}
		if(div == 0)
		{
			if(num[13] == 1)
				return true;
			else
				return false;
		}
		else if(div == 1)
		{
			if(num[13] == 0)
				return true;
			else
				return false;
		}
		else if((11-div) == num[13])
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else {
	// 2000�� ���� ������� �ֹε�Ϲ�ȣ üũ ��ƾ 		
		if (num[3] != 0 && num[3] != 1) {
			return false;
		}
		else if (num[5] != 0 && num[5] != 1 && num[5] != 2 && num[5] != 3) {		
			return false;
		}
		else if (num[7] != 1 && num[7] != 2 && num[7] != 3 && num[7] != 4) {
			return false;
		}
		else if (num[3] == 0 && num[4] == 0) {		
			return false;
		}
		else if ((num[3] == 1) && (num[4] != 0 && num[4] != 1 && num[4] != 2)) {		
			return false;
		}
		else if (num[5] == 0 && num[6] == 0) {		
			return false;
		}
		else if (num[5] == 3 && (num[6] != 0 && num[6]  != 1)) {		
			return false;
		}
		else {
			return true;
		}
	}
	// Y2K Source end
}


 
 


// �ڸ����� ���� ���� �Է¹ڽ� �̵�
// ����  <INPUT TYPE="text" Name="abc1" onkeyup="autotab(this.name,10)"> - <INPUT TYPE="text" name="abc2">
function autotab(original, destination) 
{
	if (original.getAttribute && original.value.length == original.getAttribute("maxlength"))
	//alert(destination);
	destination.focus()
}

 
 
 //���� �˻�
function checkNum(obj)
{
  for(var i=0; i<obj.value.length;i++)
  {
    if(obj.value.substring(i,i+1) < "0" || obj.value.substring(i,i+1) > "9")
    {
      alert("�� �ʵ�� ���ڸ� �Է� �����մϴ�.");
      obj.value = "";
      obj.focus();
      return false;
    }
   }
 return true;
}


function isValidRegnumber(regObj1, regObj2, regObj3) {
    var value = regObj1.value + "" + regObj2.value + "" + regObj3.value;
    var temp, comp, ld_1, ld_2, ld_3, ld_4, ld_5, ld_6, ld_7, ld_8, ld_9, ld_10;

    if (value.length != 10) {
        alert("����� ��Ϲ�ȣ �ڸ����� ���� �ʽ��ϴ�. (��:123-12-12345) ");
        regObj1.value = "";
        regObj2.value = "";
        regObj3.value = "";
        regObj1.focus();
       
        return false;
    }
    ld_1 = value.substr(0, 1);
    ld_2 = value.substr(1, 1);
    ld_3 = value.substr(2, 1);
    ld_4 = value.substr(3, 1);
    ld_5 = value.substr(4, 1);
    ld_6 = value.substr(5, 1);
    ld_7 = value.substr(6, 1);
    ld_8 = value.substr(7, 1);
    ld_9 = value.substr(8, 1);
    ld_10 = value.substr(9, 1);
    temp = (ld_1 * 1) % 10
		 + (ld_2 * 3) % 10
		 + (ld_3 * 7) % 10
		 + (ld_4 * 1) % 10
		 + (ld_5 * 3) % 10
		 + (ld_6 * 7) % 10
		 + (ld_7 * 1) % 10
		 + (ld_8 * 3) % 10
		 + (ld_9 * 5) % 10 + Math.floor((ld_9 * 5) / 10);
    comp = temp % 10;
    if (ld_10 == (10 - comp))
        return true;
    else
        if ((comp == 0) && (ld_10 == 0))
        return true;
    else {
        alert("����� ��Ϲ�ȣ�� ��Ȯ���� �ʽ��ϴ�.");
        regObj1.value = "";
        regObj2.value = "";
        regObj3.value = "";
        regObj1.focus();
       
        return false;
    }
} 



// ���� ��Ϲ�ȣ üũ
function BubinSSN(obj1, obj2) {
    var value = obj1.value + "" + obj2.value;
    var temp, comp, ld_1, ld_2, ld_3, ld_4, ld_5, ld_6, ld_7, ld_8, ld_9, ld_10, ld_11, ld_12, ld_13;

    if (value.length != 13) {
        alert("���� ��Ϲ�ȣ �ڸ����� ���� �ʽ��ϴ�. (��:123456-1234567) ");
        obj1.value = "";
        obj2.value = "";
        obj1.focus();
       
        return false;
    }
    ld_1 = value.substr(0, 1);
    ld_2 = value.substr(1, 1);
    ld_3 = value.substr(2, 1);
    ld_4 = value.substr(3, 1);
    ld_5 = value.substr(4, 1);
    ld_6 = value.substr(5, 1);
    ld_7 = value.substr(6, 1);
    ld_8 = value.substr(7, 1);
    ld_9 = value.substr(8, 1);
    ld_10 = value.substr(9, 1);
    ld_11 = value.substr(10, 1);
    ld_12 = value.substr(11, 1);
    ld_13 = value.substr(12, 1);

    temp = (ld_1 * 1) +
   	      (ld_2 * 2) +
   	      (ld_3 * 1) +
   	      (ld_4 * 2) +
   	      (ld_5 * 1) +
   	      (ld_6 * 2) +
   	      (ld_7 * 1) +
   	      (ld_8 * 2) +
   	      (ld_9 * 1) +
   	      (ld_10 * 2) +
   	      (ld_11 * 1) +
   	      (ld_12 * 2);

    comp = temp % 10;


    if (comp != 0)
        comp = 10 - comp;
    if (comp == ld_13)
        return true;
    else {
        alert("���� ��Ϲ�ȣ�� ��Ȯ���� �ʽ��ϴ�.");
        obj1.value = "";
        obj2.value = "";
        obj1.focus();
      
        return false;
    }

}



function na_restore_img_src(name, nsdoc)
{
  var img = eval((navigator.appName.indexOf('Netscape', 0) != -1) ? nsdoc+'.'+name : 'document.all.'+name);
  if (name == '')
    return;
  if (img && img.altsrc) {
    img.src    = img.altsrc;
    img.altsrc = null;
  } 
}

function na_preload_img()
{ 
  var img_list = na_preload_img.arguments;
  if (document.preloadlist == null) 
    document.preloadlist = new Array();
  var top = document.preloadlist.length;
  for (var i=0; i < img_list.length-1; i++) {
    document.preloadlist[top+i] = new Image;
    document.preloadlist[top+i].src = img_list[i+1];
  } 
}

function na_change_img_src(name, nsdoc, rpath, preload)
{ 
  var img = eval((navigator.appName.indexOf('Netscape', 0) != -1) ? nsdoc+'.'+name : 'document.all.'+name);
  if (name == '')
    return;
  if (img) {
    img.altsrc = img.src;
    img.src    = rpath;
  } 
}

function inFocus1(i)
{
	(i).style.border='2px solid #F03116';
	(i).style.background='#fff8d4';
}
function outFocus1(i) {
	(i).style.border='1px solid #d0d0d0';
	(i).style.background='#FFFFFF';
}

function _ID(obj){
	return document.getElementById(obj)
}

 
//�ݿø� �Լ�
function round(num,ja) { 

    ja=Math.pow(10,ja) 

    return Math.round(num * ja) / ja; 

} 



 /* ----------------------------------------------------------------------------
 * Ư�� ��¥�� ���� ������ ����ŭ ����(+-)�� ��¥�� ��ȯ
 
 * 
 
 * �Է� �Ķ���� -----
 * pInterval : "yyyy" �� ���� ����, "m" �� �� ����, "d" �� �� ����
 * pAddVal  : ���� �ϰ��� �ϴ� �� (������)
 * pYyyymmdd : ������ ������ �Ǵ� ��¥
 * pDelimiter : pYyyymmdd ���� ���� �����ڸ� ���� (������ "" �Է�)
 
 * 
 
 * ��ȯ�� ----
 
 * yyyymmdd �Ǵ� �Լ� �Է½� ������ �����ڸ� ������ yyyy?mm?dd ��
 *
 
 * ��뿹 ---
 
 * 2008-01-01 �� 3 �� ���ϱ� ==> addDate("d", 3, "2008-08-01", "-");
 
 * 20080301 �� 8 ���� ���ϱ� ==> addDate("m", 8, "20080301", "");
 --------------------------------------------------------------------------- */
 
function addDate(pInterval, pAddVal, pYyyymmdd, pDelimiter)
{
 var yyyy;
 var mm;
 var dd;
 var cDate;
 var oDate;
 var cYear, cMonth, cDay;
 
 if (pDelimiter != "") {
  pYyyymmdd = pYyyymmdd.replace(eval("/\\" + pDelimiter + "/g"), "");
 }
 
 
 yyyy = pYyyymmdd.substr(0, 4);
 mm  = pYyyymmdd.substr(4, 2);
 dd  = pYyyymmdd.substr(6, 2);
 
 if (pInterval == "yyyy") {
  yyyy = (yyyy * 1) + (pAddVal * 1); 
 } else if (pInterval == "m") {
  mm  = (mm * 1) + (pAddVal * 1);
 } else if (pInterval == "d") {
  dd  = (dd * 1) + (pAddVal * 1);
 }
 
 
 cDate = new Date(yyyy, mm - 1, dd) // 12��, 31���� �ʰ��ϴ� �Է°��� ���� �ڵ����� ���� ��¥�� �������.
 cYear = cDate.getFullYear();
 cMonth = cDate.getMonth() + 1;
 cDay = cDate.getDate();
 
 cMonth = cMonth < 10 ? "0" + cMonth : cMonth;
 cDay = cDay < 10 ? "0" + cDay : cDay;
 
 
 
 if (pDelimiter != "") {
  return cYear + pDelimiter + cMonth + pDelimiter + cDay;
 } else {
  return cYear + cMonth + cDay;
 }
 
}


function Right(str, n){
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}


function getVerType() {
	var agt=navigator.userAgent.toLowerCase();
	var browser = (function() {
		var s = navigator.userAgent.toLowerCase();
		var match = /(webkit)[ \/](\w.]+)/.exec(s) || /(opera)(?:.*version)?[ \/](\w.]+)/.exec(s) || /(msie) ([\w.]+)/.exec(s) || !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) || [];
		return { name: match[1] || "", version: match[2] || "0" };
	}());
	var trident = navigator.userAgent.match(/Trident\/(\d)/i);
	if(trident != null){
		if ( Right(trident,1) == "4"){
				browser.version = "8";
		}else if ( Right(trident,1) == "5"){
				browser.version = "9";
		}else if ( Right(trident,1) == "6"){
				browser.version = "10";
		}else if ( Right(trident,1) == "7"){
				browser.version = "11";
		}else{

		}
	}else{
		 browser.version = browser.version;
	}
	
	  return browser.version;
}
 
		
function selBox(selId, data){

	$("#"+selId+" option").each(function(){

		var selVal = $(this).val();
		if(selVal == data){

			$(this).attr("selected", "selected");
		}

	});

}


//���� ������
var agent = '';

function getOsCode() {
  var uagent = navigator.userAgent.toLocaleLowerCase();
  // �ȵ���̵� ī��Ŭ�� 4.0.3 ���� �������� ���丮 Ŀ���Ҹ�ũ(kakaostory://) Ŭ���� ���丮�� ��ġ ���ο� ���� �˾Ƽ� �б� ó������...
  if (uagent.search("android") > -1 && '0.0.0' <= '4.0.3') {
	return "android";
  } else if (uagent.search("iphone") > -1 || uagent.search("ipod") > -1 || uagent.search("ipad") > -1) {
	return "ios";
  } else {
	return "etc";
  }
}
var osCode = getOsCode();
  var envCode = osCode == "android" || osCode == "ios" ? "mobile" : "pc";
  var userAgent = function() {
	try {
		var uagent = navigator.userAgent.toLocaleLowerCase();
		if (uagent.search("android") > -1) {
			return "android";
		} else if (uagent.search("iphone") > -1 || uagent.search("ipod") > -1 || uagent.search("ipad") > -1) {
			return "ios";
		} else {
			return "etc";
		}
	} catch(e) {
		return "etc";
	}
}


function mobile_move(){
	if ( envCode == "pc" )
	{
		popup_size('mobile1', 'http://m.smart.ac.kr', 450, $(window).height(), 0, 0, 0, 1, 0);
	}else{
		location.href="http://m.smart.ac.kr";
	}
}

//��ȭ��ȣ �ڵ� ���� �߰� <input type=text name=num2 onfocus="OnCheckPhone(this)" onKeyup="OnCheckPhone(this)" size=14> 
function OnCheckPhone(oTa) { 
    var oForm = oTa.form ; 
    var sMsg = oTa.value ; 
    var onlynum = "" ; 
    var imsi=0; 
    onlynum = RemoveDash2(sMsg);  //������ �Է½� �ڵ����� ������ 
    onlynum =  checkDigit(onlynum);  // ���ڸ� �Է¹ް� �� 
    var retValue = ""; 

    if(event.keyCode != 12 ) { 
        if(onlynum.substring(0,2) == 02) {  // ������ȭ��ȣ�� ���  10�ڸ������� ��Ÿ���� �� �̻��� �ڸ����� �ڵ����� 
                if (GetMsgLen(onlynum) <= 1) oTa.value = onlynum ; 
                if (GetMsgLen(onlynum) == 2) oTa.value = onlynum + "-"; 
                if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,3) ; 
                if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,4) ; 
                if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) ; 
                if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) ; 
                if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,7) ; ; 
                if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,8) ; 
                if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,9) ; 
                if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
                if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
                if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
        } 
        if(onlynum.substring(0,2) == 05 ) {  // 05�� ���۵Ǵ� ��ȣ üũ 
            if(onlynum.substring(2,3) == 0 ) {  // 050���� ���۵Ǵ��� ������ ���� ���ǹ� 
                    if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
                    if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
                    if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
                    if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
                    if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,9) ; ; 
                    if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,10) ; 
                    if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,11) ; 
                    if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
                    if (GetMsgLen(onlynum) == 13) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
          } else { 
                if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
                if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
                if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
                if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
                if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
                if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
                if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ; ; 
                if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
                if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
                if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
                if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
          } 
        } 

        if(onlynum.substring(0,2) == 03 || onlynum.substring(0,2) == 04  || onlynum.substring(0,2) == 06  || onlynum.substring(0,2) == 07  || onlynum.substring(0,2) == 08 ) {  // ������ȭ��ȣ�� �ƴ� ��ȣ�� ���(070,080���� // 050��ȣ�� ��������) 
                if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
                if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
                if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
                if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
                if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
                if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
                if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ; ; 
                if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
                if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
                if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
                if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 

        } 
        if(onlynum.substring(0,2) == 01) {  //�޴����� ��� 
            if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
            if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
            if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
            if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
            if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
            if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
            if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,8) ; 
            if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
            if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
            if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
            if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
        } 

        if(onlynum.substring(0,1) == 1) {  // 1588, 1688���� ��ȣ�� ��� 
            if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
            if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
            if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
            if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
            if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
            if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
            if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
            if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
            if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
            if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
        } 
    } 
} 

function RemoveDash2(sNo) { 
var reNo = "" 
for(var i=0; i<sNo.length; i++) { 
    if ( sNo.charAt(i) != "-" ) { 
    reNo += sNo.charAt(i) 
    } 
} 
return reNo 
} 

function GetMsgLen(sMsg) { // 0-127 1byte, 128~ 2byte 
var count = 0 
    for(var i=0; i<sMsg.length; i++) { 
        if ( sMsg.charCodeAt(i) > 127 ) { 
            count += 2 
        } 
        else { 
            count++ 
        } 
    } 
return count 
} 

function checkDigit(num) { 
    var Digit = "1234567890"; 
    var string = num; 
    var len = string.length 
    var retVal = ""; 

    for (i = 0; i < len; i++) 
    { 
        if (Digit.indexOf(string.substring(i, i+1)) >= 0) 
        { 
            retVal = retVal + string.substring(i, i+1); 
        } 
    } 
    return retVal; 
} 


function dateMaskOn(myForm){
	var maskedDate = "";
	
	myForm.value = getOnlyDigit(myForm.value);
	
	for (i = 0 ; i < myForm.value.length ; i++)
	{
		maskedDate += myForm.value.charAt(i);

		if ( i != myForm.value.length - 1 && (i == 3 || i == 5))
			maskedDate += "/";
	}
	myForm.value = maskedDate;
}


/* ���ڿ����� ���ڸ� ���� */
function getOnlyDigit( number )
{
	var i;
	var result = "";

	for(i=0; i<number.length; i++)
	{
		if( number.charAt(i)>='0' && number.charAt(i)<='9' )
			result += number.charAt(i);
	}

	return result;
}
	
/* Object���� ���ڸ� ���� */
function getOnlyDigitObj(myForm)
{
	var i;
	var result = "";

  var number = myForm.value;
  
	for(i=0; i<number.length; i++)
	{
		if( number.charAt(i)>='0' && number.charAt(i)<='9' )
			result += number.charAt(i);
	}

  myForm.value = result;
}


//���� 2�ڸ� �����
function NumberZero(_num) {
	return (_num < 10) ? "0" + _num : _num;
}