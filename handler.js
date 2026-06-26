document.getElementById('btn-update-title').addEventListener('click', function(){
    // with external variable;

    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'Updated page title text';
})

document.getElementById('btn-login').addEventListener('click', function(){
    // without external variable;

    document.getElementById('user-info').innerText = 'user logged in successfully';
});