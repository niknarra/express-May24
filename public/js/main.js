const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");

// Get and show posts
async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Failed");
    }
    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error", error);
  }
}

// Submitting new posts

async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = FormData.get("title");
}

try {
  const res = await
} catch (error) {
  
}

// Event Listener
button.addEventListener("click", showPosts);
