// click the thing
// document.querySelectorAll('summary')[10].click()

// let repoName = document.querySelectorAll('strong')[12].innerText.split('/')[1]

// document.querySelectorAll('details-dialog.Box.Box--overlay.d-flex')[3].querySelector('form').querySelector('input.form-control').value = repoName

document.querySelectorAll('summary')[10].click()

let repoName = document.querySelectorAll('strong')[12].innerText.split('/')[1]

document.querySelectorAll('details-dialog.Box.Box--overlay.d-flex')[3].querySelector('form').querySelector('input.form-control').focus()

document.querySelectorAll('details-dialog.Box.Box--overlay.d-flex')[3].querySelector('form').querySelector('input.form-control').value = repoName

document.querySelectorAll('button.btn.btn-block.btn-danger')[2].disabled = false

document.querySelectorAll('button.btn.btn-block.btn-danger')[2].click()
