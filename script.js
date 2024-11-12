function toggleText(icon) {
    const textParagraph=icon.nextElementSibling;
    if (textParagraph.style.display==='none' || textParagraph.style.display==='') {
        textParagraph.style.display='block';
        icon.src='./assets/images/icon-minus.svg'
    }
    else {
        textParagraph.style.display='none';
        icon.src='./assets/images/icon-plus.svg'
    }
}