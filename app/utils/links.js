
export const linkPg = (id, page) => {
    const link = document.querySelector(id);
    link.addEventListener("click", () => page());
}