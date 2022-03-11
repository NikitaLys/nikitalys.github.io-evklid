document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.stages__list_link').forEach(function(stagesBtn) {
        stagesBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path


            document.querySelectorAll('.stages__block').forEach(function(stagesBlock) {
                stagesBlock.classList.remove('stages__block_active')
            })
            document.querySelector(`[data-target = "${path}"]`).classList.add('stages__block_active')
        })
    })
})