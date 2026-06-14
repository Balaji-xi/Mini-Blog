let posts =
    JSON.parse(localStorage.getItem("posts")) || [];

const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const addBtn = document.getElementById("addBtn");
const postsList = document.getElementById("postsList");
const postDetail = document.getElementById("postDetail");

addBtn.addEventListener("click", addPost);

function addPost() {

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (title === "" || body === "") {
        alert("Please fill all fields");
        return;
    }

    const post = {
        id: Date.now(),
        title: title,
        body: body,
        date: new Date().toLocaleString()
    };

    posts.unshift(post);

    savePosts();

    renderPosts();

    titleInput.value = "";
    bodyInput.value = "";
}

function savePosts() {
    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );
}

function renderPosts() {

    postsList.innerHTML = "";

    if (posts.length === 0) {

        postsList.innerHTML = `
            <p>No blog posts available.</p>
        `;

        return;
    }

    posts.forEach(post => {

        const postCard = document.createElement("div");

        postCard.classList.add("post");

        postCard.innerHTML = `
            <h3 onclick="showPost(${post.id})">
                ${post.title}
            </h3>

            <p>${post.date}</p>

            <button onclick="deletePost(${post.id})">
                Delete
            </button>
        `;

        postsList.appendChild(postCard);
    });
}

function showPost(id) {

    const post =
        posts.find(post => post.id === id);

    postDetail.style.display = "block";

    postDetail.innerHTML = `
        <h2>${post.title}</h2>

        <small>${post.date}</small>

        <p>${post.body}</p>
    `;
}

function deletePost(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this post?");

    if (!confirmDelete) {
        return;
    }

    posts =
        posts.filter(post => post.id !== id);

    savePosts();

    renderPosts();

    postDetail.style.display = "none";
}

renderPosts();