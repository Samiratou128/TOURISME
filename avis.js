document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    addComment(name, comment);

    document.getElementById('commentForm').reset(); 
});

function addComment(name, comment) {
    const commentsList = document.getElementById('commentsList');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const commentName = document.createElement('h3');
    commentName.textContent = name;

    const commentText = document.createElement('p');
    commentText.textContent = comment;

    commentDiv.appendChild(commentName);
    commentDiv.appendChild(commentText);

    commentsList.appendChild(commentDiv);
}