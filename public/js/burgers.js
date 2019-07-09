$(document).ready(function () {

    $(".eat").on("click", function (event) {
        var id = $(this).attr("id");

        var eat = {
            devour: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eat
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
