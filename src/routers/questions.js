const express = require("express");
const app = express.Router();
const Question = require("../models/questions");
const auth = require("../middleware/auth");
const answer = require("../Answer/answer");

app.get("/question01", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question01";
        },
    });
});
app.post("/question01", auth, async (req, res) => {
    if (answer.question01 == req.body.question01.toLowerCase()) {
        const quest = new Question({
            question: "question01",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question02"); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question01";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question01";
            },
        });
    }
});
app.get("/question02", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question02";
        },
    });
});
app.post("/question02", auth, async (req, res) => {
    if (answer.question02 == req.body.question02.toLowerCase()) {
        const quest = new Question({
            question: "question02",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question03"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question02";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question02";
            },
        });
    }
});
app.get("/question03", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question03";
        },
    });
});
app.post("/question03", auth, async (req, res) => {
    if (answer.question03 == req.body.question03.toLowerCase()) {
        const quest = new Question({
            question: "question03",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question04"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question03";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question03";
            },
        });
    }
});
app.get("/question04", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question04";
        },
    });
});
app.post("/question04", auth, async (req, res) => {
    if (answer.question04 == req.body.question04.toLowerCase()) {
        const quest = new Question({
            question: "question04",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question05"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question04";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question04";
            },
        });
    }
});
app.get("/question05", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question05";
        },
    });
});
app.post("/question05", auth, async (req, res) => {
    if (answer.question05 == req.body.question05.toLowerCase()) {
        const quest = new Question({
            question: "question05",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/introtoluckydraw"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question05";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question05";
            },
        });
    }
});
app.get("/introtoluckydraw", auth, (req, res) => {
    res.render("introtoluckydraw", {
        name: req.user.name,
    });
});
app.get("/luckydraw", auth, (req, res) => {
    res.render("luckydraw", {
        name: req.user.name,
    });
});
app.get("/question06", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question06";
        },
    });
});
app.post("/question06", auth, async (req, res) => {
    if (answer.question06 == req.body.question06.toLowerCase()) {
        const quest = new Question({
            question: "question06",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question07"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question06";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question06";
            },
        });
    }
});
app.get("/question06_n", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question06_n";
        },
    });
});
app.post("/question06_n", auth, async (req, res) => {
    if (answer.question06_n == req.body.question06_n.toLowerCase()) {
        const quest = new Question({
            question: "question06_n",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question07"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question06_n";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question06_n";
            },
        });
    }
});
app.get("/question06_nn", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question06_nn";
        },
    });
});
app.post("/question06_nn", auth, async (req, res) => {
    if (answer.question06_nn == req.body.question06_nn.toLowerCase()) {
        const quest = new Question({
            question: "question06_nn",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question06_n"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question06_nn";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question06";
            },
        });
    }
});
app.get("/question07", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question07";
        },
    });
});
app.post("/question07", auth, async (req, res) => {
    if (answer.question07 == req.body.question07.toLowerCase()) {
        const quest = new Question({
            question: "question07",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question08"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question07";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question07";
            },
        });
    }
});
app.get("/question08", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question08";
        },
    });
});
app.post("/question08", auth, async (req, res) => {
    if (answer.question08 == req.body.question08.toLowerCase()) {
        const quest = new Question({
            question: "question08",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question09"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question08";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question08";
            },
        });
    }
});
app.get("/question09", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question09";
        },
    });
});
app.post("/question09", auth, async (req, res) => {
    if (answer.question09 == req.body.question09.toLowerCase()) {
        const quest = new Question({
            question: "question09",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question10"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question09";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question09";
            },
        });
    }
});
app.get("/question10", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question10";
        },
    });
});
app.post("/question10", auth, async (req, res) => {
    if (answer.question10 == req.body.question10.toLowerCase()) {
        const quest = new Question({
            question: "question10",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question11"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question10";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question10";
            },
        });
    }
});
app.get("/question11", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question11";
        },
    });
});
app.post("/question11", auth, async (req, res) => {
    if (answer.question11 == req.body.question11.toLowerCase()) {
        const quest = new Question({
            question: "question11",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question12"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question11";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question11";
            },
        });
    }
});
app.get("/question12", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question12";
        },
    });
});
app.post("/question12", auth, async (req, res) => {
    if (answer.question12 == req.body.question12.toLowerCase()) {
        const quest = new Question({
            question: "question12",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question13"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question12";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question12";
            },
        });
    }
});
app.get("/question13", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question13";
        },
    });
});
app.post("/question13", auth, async (req, res) => {
    if (answer.question13 == req.body.question13.toLowerCase()) {
        const quest = new Question({
            question: "question13",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question14"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question13";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question13";
            },
        });
    }
});
app.get("/question14", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question14";
        },
    });
});
app.post("/question14", auth, async (req, res) => {
    if (answer.question14 == req.body.question14.toLowerCase()) {
        const quest = new Question({
            question: "question14",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question15"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question14";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question14";
            },
        });
    }
});
app.get("/question15", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question15";
        },
    });
});
app.post("/question15", auth, async (req, res) => {
    if (answer.question15 == req.body.question15.toLowerCase()) {
        const quest = new Question({
            question: "question15",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/luckydraw01"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question15";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question15";
            },
        });
    }
});
app.get("/luckydraw01", auth, (req, res) => {
    res.render("luckydraw01", {
        name: req.user.name,
    });
});
app.get("/question16", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question16";
        },
    });
});
app.post("/question16", auth, async (req, res) => {
    if (answer.question16 == req.body.question16.toLowerCase()) {
        const quest = new Question({
            question: "question16",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question17"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question16";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question16";
            },
        });
    }
});
app.get("/question16_n", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question16_n";
        },
    });
});
app.post("/question16_n", auth, async (req, res) => {
    if (answer.question16_n == req.body.question16_n.toLowerCase()) {
        const quest = new Question({
            question: "question16_n",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question17"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question16_n";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question16_n";
            },
        });
    }
});
app.get("/question16_nn", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question16_nn";
        },
    });
});
app.post("/question16_nn", auth, async (req, res) => {
    if (answer.question16_nn == req.body.question16_nn.toLowerCase()) {
        const quest = new Question({
            question: "question16_nn",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question16_n"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question16_nn";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question16_nn";
            },
        });
    }
});
app.get("/question17", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question17";
        },
    });
});
app.post("/question17", auth, async (req, res) => {
    if (answer.question17 == req.body.question17.toLowerCase()) {
        const quest = new Question({
            question: "question17",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question18"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question17";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question17";
            },
        });
    }
});
app.get("/question18", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question18";
        },
    });
});
app.post("/question18", auth, async (req, res) => {
    if (answer.question18 == req.body.question18.toLowerCase()) {
        const quest = new Question({
            question: "question18",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question19"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question18";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question18";
            },
        });
    }
});
app.get("/question19", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question19";
        },
    });
});
app.post("/question19", auth, async (req, res) => {
    if (answer.question19 == req.body.question19.toLowerCase()) {
        const quest = new Question({
            question: "question19",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question20"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question19";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question19";
            },
        });
    }
});
app.get("/question20", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question20";
        },
    });
});
app.post("/question20", auth, async (req, res) => {
    if (answer.question20 == req.body.question20.toLowerCase()) {
        const quest = new Question({
            question: "question20",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question21"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question20";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question20";
            },
        });
    }
});
app.get("/question21", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question21";
        },
    });
});
app.post("/question21", auth, async (req, res) => {
    if (answer.question21 == req.body.question21.toLowerCase()) {
        const quest = new Question({
            question: "question21",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question22"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question21";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question21";
            },
        });
    }
});
app.get("/question22", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question22";
        },
    });
});
app.post("/question22", auth, async (req, res) => {
    if (answer.question22 == req.body.question22.toLowerCase()) {
        const quest = new Question({
            question: "question22",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question23"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question22";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question22";
            },
        });
    }
});
app.get("/question23", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question23";
        },
    });
});
app.post("/question23", auth, async (req, res) => {
    if (answer.question23 == req.body.question23.toLowerCase()) {
        const quest = new Question({
            question: "question23",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question24"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question23";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question23";
            },
        });
    }
});
app.get("/question24", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question24";
        },
    });
});
app.post("/question24", auth, async (req, res) => {
    if (answer.question24 == req.body.question24.toLowerCase()) {
        const quest = new Question({
            question: "question24",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question25"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question24";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question24";
            },
        });
    }
});
app.get("/question25", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question25";
        },
    });
});
app.post("/question25", auth, async (req, res) => {
    if (answer.question25 == req.body.question25.toLowerCase()) {
        const quest = new Question({
            question: "question25",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/luckydraw02"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question25";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question25";
            },
        });
    }
});
app.get("/luckydraw02", auth, (req, res) => {
    res.render("luckydraw02", {
        name: req.user.name,
    });
});
app.get("/question26", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question26";
        },
    });
});
app.post("/question26", auth, async (req, res) => {
    if (answer.question26 == req.body.question26.toLowerCase()) {
        const quest = new Question({
            question: "question26",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question27"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question26";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question26";
            },
        });
    }
});
app.get("/question26_n", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question26_n";
        },
    });
});
app.post("/question26_n", auth, async (req, res) => {
    if (answer.question26_n == req.body.question26_n.toLowerCase()) {
        const quest = new Question({
            question: "question26_n",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question27"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question26_n";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question26_n";
            },
        });
    }
});
app.get("/question26_nn", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question26_nn";
        },
    });
});
app.post("/question26_nn", auth, async (req, res) => {
    if (answer.question26_nn == req.body.question26_nn.toLowerCase()) {
        const quest = new Question({
            question: "question26_nn",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question26_n"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question26_nn";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question26_nn";
            },
        });
    }
});
app.get("/question27", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question27";
        },
    });
});
app.post("/question27", auth, async (req, res) => {
    if (answer.question27 == req.body.question27.toLowerCase()) {
        const quest = new Question({
            question: "question27",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question28"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question27";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question27";
            },
        });
    }
});
app.get("/question28", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question28";
        },
    });
});
app.post("/question28", auth, async (req, res) => {
    if (answer.question28 == req.body.question28.toLowerCase()) {
        const quest = new Question({
            question: "question28",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question29"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question28";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question28";
            },
        });
    }
});
app.get("/question29", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question29";
        },
    });
});
app.post("/question29", auth, async (req, res) => {
    if (answer.question29 == req.body.question29.toLowerCase()) {
        const quest = new Question({
            question: "question29",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/question30"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question29";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question29";
            },
        });
    }
});
app.get("/question30", auth, async (req, res) => {
    res.render("question", {
        name: req.user.name,
        question: function () {
            return "question30";
        },
    });
});
app.post("/question30", auth, async (req, res) => {
    if (answer.question30 == req.body.question30.toLowerCase()) {
        const quest = new Question({
            question: "question30",
            completed: true,
            owner: req.user._id,
        });
        try {
            await quest.save();
            res.redirect("/final"); // "); // ?token=" + req.token);
        } catch (e) {
            res.render("question", {
                name: req.user.name,
                message: "Something Went Wrong! Try Again",
                question: function () {
                    return "question30";
                },
            });
        }
    } else {
        res.render("question", {
            name: req.user.name,
            message: "Wrong Answer",
            question: function () {
                return "question30";
            },
        });
    }
});

app.get("/final", auth, async (req, res) => {
    res.clearCookie("auth_token");
    res.render("final");
});

module.exports = app;
