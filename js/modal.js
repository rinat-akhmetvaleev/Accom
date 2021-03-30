let readMore = document.querySelectorAll('.show_more');

function modalShow(){
    let historyModal = document.querySelectorAll('.history_modal');
    historyModal = classList.remove('history_modal-moved');
    historyModal.classList.add('history_modal-active');
}

readMore.onclick = modalShow();