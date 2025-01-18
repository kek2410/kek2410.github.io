/*
'�� �� �� : js_02.js
'�� �� �� : �̼���
'�� �� �� : 2006.06.01
'��    �� : �˾������� ����
'  <script language="javaScript" type="text/javascript" SRC="/js/js_02.js"></SCRIPT>
' 	��� ���� javascript:popup_size('win', 'http://', 300, 200, 0, 0, 0, 0, 0)
' 	������ ���� javascript:popup_size_p('win', 'http://', 100, 100, 300, 200, 0, 0, 0, 0, 0)
'	���� ����   javascript:popup_size_h('win', 'http://')
' 	��� ��� javascript:popup_size_m('winm', 'http://', 300, 200)
*/

function popup_size(name, url, width, height, toolbar, menubar, statusbar, scrollbar, resizable) {
    var posx = 0;
    var posy = 0;
    posx = (screen.width - width) / 2 - 1;
    posy = ((screen.height - height) / 2 - 1) - 40;
    toolbar_str = toolbar ? 'yes' : 'no';
    menubar_str = menubar ? 'yes' : 'no';
    statusbar_str = statusbar ? 'yes' : 'no';
    scrollbar_str = scrollbar ? 'yes' : 'no';
    resizable_str = resizable ? 'yes' : 'no';
    window.open(url, name, 'left=' + posx + ',top=' + posy + ',width=' + width + ',height=' + height + ',toolbar=' + toolbar_str + ',menubar=' + menubar_str + ',status=' + statusbar_str + ',scrollbars=' + scrollbar_str + ',resizable=' + resizable_str);
}

function popup_size_p(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable) {
    toolbar_str = toolbar ? 'yes' : 'no';
    menubar_str = menubar ? 'yes' : 'no';
    statusbar_str = statusbar ? 'yes' : 'no';
    scrollbar_str = scrollbar ? 'yes' : 'no';
    resizable_str = resizable ? 'yes' : 'no';
    window.open(url, name, 'left=' + left + ',top=' + top + ',width=' + width + ',height=' + height + ',toolbar=' + toolbar_str + ',menubar=' + menubar_str + ',status=' + statusbar_str + ',scrollbars=' + scrollbar_str + ',resizable=' + resizable_str);
}


function popup_size_f(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable) {
    toolbar_str = toolbar ? 'yes' : 'no';
    menubar_str = menubar ? 'yes' : 'no';
    statusbar_str = statusbar ? 'yes' : 'no';
    scrollbar_str = scrollbar ? 'yes' : 'no';
    resizable_str = resizable ? 'yes' : 'no';
    window.open(url, name, 'left=' + left + ',top=' + top + ',width=' + width + ',height=' + height + ',toolbar=' + toolbar_str + ',menubar=' + menubar_str + ',status=' + statusbar_str + ',scrollbars=' + scrollbar_str + ',resizable=' + resizable_str, fullscreen = 3);
}


function popup_size_h(name, url) {
    window.open(url, name, 'left=99999', 'top=99999', 'width=10', 'height=10', 'toolbar=0', 'menubar=0', 'status=0', 'scrollbars=0', 'resizable=0');
    // window.open(url, name, 'left=1','top=1','width=1000 ','height=1000','toolbar=0','menubar=0','status=0','scrollbars=0','resizable=0');

}

function popup_size_m(name, url, width, height) {
    window.showModalDialog(url, name, "dialogHeight: '+height+'px; dialogWidth: '+width+'px;  resizable: no; help: no; status: no; scroll: no;");
    //window.showModalDialog(url,name,"dialogHeight:150px; dialogWidth: 220px;  resizable: no; help: no; status: no; scroll: no;");
}
 
function winReSize() {

    // ������ 7.0 üũ
    var ieHeight = 0;
    if (navigator.userAgent.indexOf("MSIE 7") > 0) {
        ieHeight = 60;
    } else {
        ieHeight = 0;
    }


    var g_fIsSP2 = false;
    g_fIsSP2 = (window.navigator.userAgent.indexOf("SV1") != -1);
    //alert(g_fIsSP2);
    var oBody = document.body;
    var p_height, p_width;

    p_width = oBody.scrollWidth + (oBody.offsetWidth - oBody.clientWidth) + 8;
    p_height = oBody.scrollHeight + (oBody.offsetHeight - oBody.clientHeight) + 8;

    if (g_fIsSP2) {
        // XP SP2 ��������..
        self.resizeTo(p_width - 2, p_height + ieHeight + 38);
    } else {
        //XP SP2 �������� �ƴ�.
        self.resizeTo(p_width - 2, p_height + ieHeight + 13);
    }

}

 

function open_down(URL, File, SIZE) {

    winstyle = "height=333,width=600, status=no,toolbar=no,menubar=no,location=no";
    window.open("/include/asp/down/FileDownloadMonitor.asp?url=" + URL + "&file=" + File + "&size=" + SIZE, null, winstyle);


}


function open_down2(group, board, num, gubun) {

    winstyle = "height=333,width=600, status=no,toolbar=no,menubar=no,location=no";
    window.open("/include/asp/down/boardDownloadMonitor.asp?group_name=" + group + "&board_id=" + board + "&idx_num=" + num + "&file=" + gubun, null, winstyle);


}

function open_down4(group, board, num, gubun) {

    winstyle = "height=333,width=600, status=no,toolbar=no,menubar=no,location=no";
    window.open("/include/asp/down/boardDownloadMonitor2.asp?group_name=" + group + "&board_id=" + board + "&idx_num=" + num + "&file=" + gubun, null, winstyle);


}
function win_resize(a, b) {

    appVer = navigator.appVersion.substring(25, 22);

    if (appVer == "7.0") {
        window.resizeTo(a, parseInt(b) + 30);
    } else {
        window.resizeTo(a, b);
    }
}
 

function Value_Reset(a_value) {
    var pv;
    var pr;
    pf = eval("document.forms." + a_value);
    pf.value = "";

}
//������ ����
function editorphoto() {
    popup_size('photo', '/editor/quick_photo_uploader/popup/Photo_Quick_UploadPopup.asp', 350, 250, 0, 0, 0, 0, 0);
}

//������ ������
function editorphotomail() {
    popup_size('photo', '/editor/quick_photo_uploader/popup/MailPhoto_Quick_UploadPopup.asp', 350, 250, 0, 0, 0, 0, 0);
}
 