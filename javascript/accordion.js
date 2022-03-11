document.addEventListener('DOMContentLoaded', function() {
    $(function() {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content",
            navigation: true
        })
        $(".question__list_btn").accordion("tabindex", "0", 0);

    })
})
