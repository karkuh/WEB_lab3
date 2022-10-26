document.getElementById('logo').onclick = function () {
    document.getElementById('logo').hidden = true;
    document.getElementById('vidos').classList.add('dontNone');
    document.getElementById('info').classList.add('none');
    document.getElementById('player').classList.remove('none');

}