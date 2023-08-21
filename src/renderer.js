const textarea = document.getElementById("textarea");

document.getElementById("save-file").addEventListener("click", () => {
    const link = document.createElement("a");
    const textareaContent = textarea.value;
    const file = new Blob([textareaContent], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "saved.txt";
    link.click();
    URL.revokeObjectURL(link.href);
});