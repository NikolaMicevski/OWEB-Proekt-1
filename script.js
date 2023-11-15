let productLikes = {};

function likeProduct(productName) {
    if (!productLikes[productName]) {
        productLikes[productName] = 0;
    }

    productLikes[productName]++;
    updateLikeCounter(productName);
}

function updateLikeCounter(productName) {
    const likeCounter = document.getElementById(`likeCounter-${productName}`);
    
    if (likeCounter) {
        likeCounter.textContent = `Likes: ${productLikes[productName]}`;
    }
}

function addComment(productName) {
    const commentInput = document.getElementById(`comment-${productName}`);
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentsDiv = document.getElementById(`comments-${productName}`);
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);

        commentInput.value = '';
    }
}

function toggleLoginDropdown() {
    var dropdownContent = document.getElementById('login-dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'nikola' && password === 'nikola123') {

            window.location.href = 'index.html';
            alert('Successfully logged in!');

    } else {
        document.getElementById('loginError').innerText = 'Invalid username or password.';
    }
}


