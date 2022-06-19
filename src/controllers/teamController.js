const express = require('express');
const path = require('path');

const teamController = {
    print : function (req, res) 
            {
                let players = ["Martinez", "Foyth", "Tagliafico", "Montiel", "Mac Allister", "Pezzella", "De Paul", "Acuña", "Alvarez", "Messi", "Di Maria"];
                let path_team = path.resolve(__dirname, '../views/team.ejs');

                res.render(path_team, {"players" : players});
            }
};

module.exports = teamController;
