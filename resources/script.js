function toggleCollapse(sectionId) {
    const content = document.getElementById(sectionId);
    const toggleIcon = document.getElementById(sectionId + '-toggle');
    if (!content || !toggleIcon) return;
    const isOpen = content.classList.contains('open');
    if (isOpen) {
        content.classList.remove('open');
        toggleIcon.classList.add('collapsed');
    } else {
        content.classList.add('open');
        toggleIcon.classList.remove('collapsed');
    }
}