$(function () {
    $("#btn-add-to-favorites").on("click", function () {
        var $btn = $(this);
        var id = $btn.attr("data-id");
        $.ajax({
            url: "/api/superheroes/" + id,
            method: "PUT",
            success: function () {
                if ($btn.html().trim() === "Remove from favorites") {
                    $btn.html("Add to favorites");
                } else {
                    $btn.html("Remove from favorites");
                }
            }
        });
    });
});
