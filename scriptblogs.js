const blogContainer = document.getElementById("blogContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let currentPage = 1;

// Sample blog data (you can replace this with your actual data)
const blogs = [
    { title: "Blog 1", content: "Content of Blog 1" },
    { title: "Blog 2", content: "Content of Blog 2" },
    { title: "Blog 3", content: "Content of Blog 3" },
    // Add more blogs here
];

function displayBlogs(page) {
    const startIndex = (page - 1) * 3;
    const endIndex = startIndex + 3;
    const currentBlogs = blogs.slice(startIndex, endIndex);

    currentBlogs.forEach(blog => {
        const blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        blogPost.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
        `;
        blogContainer.appendChild(blogPost);
    });

    if (endIndex >= blogs.length) {
        loadMoreBtn.style.display = "none";
    }
}

loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    displayBlogs(currentPage);
});

// Initial display of blogs
displayBlogs(currentPage);
