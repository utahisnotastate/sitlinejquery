var aStateDefinition = {

    //moredemands-level section below
 MoreOne: {
        enterState: {

            init_function: function() {
                
                $.doTimeout(3600000, function(){ 
                 $("#conversation").empty();
                   $("#wrap").removeClass().addClass("criminal");
                   $("#name").text("Local United Union City Bank");
                   $("#typeofcontact").text("Customer Service Number");
                $.doTimeout(2000, function() {
                    
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Well, I must admit things are going just as planned.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I appreciate all that you've done for me.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("You've been an excellent negotiator.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(8000, function() {
                   var dialogue = $("<p class='charactertexts-criminal'></p>").text("Now I have another  request for you.");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(10000, function() {
                   var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll admit, you may not like it. It's a bit unorthodox.");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(12000, function() {
                   var dialogue = $("<p class='charactertexts-criminal'></p>").text("You know those news crews around?");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(14000, function() {
                   var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'd like for you to offer one of them a chance to interview me live. During this situation.");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(16000, function() {
                  $("#firstchoice").text("Why?");
                $("#secondchoice").text("That will take some time to setup.");
                });
                $.doTimeout(19000, function() {
                   $("#userinputbar").show();
                });
                });


            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("That will take some time to setup.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();
            },

            next_state: 'MoreFour',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Why?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreTwo',
            pushpop_state: 'PushState'
        }

    },
    MoreTwo:  {
        enterState: {

            init_function: function() {
                $.doTimeout(5000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I think right now there is a lot of information out there making it seem like I'm a bad guy.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(6500, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'm not.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8500, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I know things look that way now, but I'm actually a really good person.");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(8500, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("So I'd like the opportunity to clear my name before I make my master exit.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(12000, function() {
                    $("#firstchoice").text("That will take some time to setup.");
                    $("#secondchoice").text("I  don't think we can do that.");
                });
                 $.doTimeout(15000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I  don't think we can do that.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'MoreFour',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("That will take some time to setup.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreThree',
            pushpop_state: 'PushState'
        }

    },
    MoreThree: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("That's great to hear.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Send them in the back, and we'll let them in");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'm gonna clear our names.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(7000, function() {
                $("#firstchoice").text("Notfy SWAT");
                $("#secondchoice").text("Notify SWAT");
                });
                $.doTimeout(10000, function() {
                $("#userinputbar").show();
                });
             



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Notfy SWAT");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Notify SWAT");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        }

    },
    MoreFour:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("OK, what about that lawyer that does all the TV commercials?");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("You know? The one that tells you that you're better  off calling him?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Um, I'm only asking because I bet he's good at negotiating hostage exchanges.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(6000, function() {
                    $("#firstchoice").text("OH! Isn't his name Paul or something  like that?");
                    $("#secondchoice").text("I'm not sure who you are referring to.");
                });
                 $.doTimeout(6000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I'm not sure who you are referring to.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'MoreSix',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("OH! Isn't his name Paul or something  like that?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreFive',
            pushpop_state: 'PushState'
        }

    },
    MoreFive:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Yeah! That guy.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Can you get him for us?");
                    $("#conversation").append(dialogue);
                });               

                $.doTimeout(6000, function() {
                    $("#firstchoice").text("Sure");
                    $("#secondchoice").text("I'll have to ask.");
                });
                 $.doTimeout(9000, function() {
                   $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I'll have to ask.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Sure");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        }

    },
    MoreSix:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Ok, well who typically negotiates for hostages?");
                    $("#conversation").append(dialogue);
                });
                
                 $.doTimeout(4000, function() {
                    $("#firstchoice").text("Me");
                    $("#secondchoice").text("Oh! We actually provide a team for you.");
                });
                 $.doTimeout(7000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Oh! We actually provide a team for you.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreNine',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("That would be me.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreSeven',
            pushpop_state: 'PushState'
        }

    },
    MoreSeven:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("No, I mean like for my side");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I know you're the negotiator for your side.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("But what about for  us?");
                    $("#conversation").append(dialogue);
                });                
                $.doTimeout(9000, function() {
                   $("#firstchoice").text("I'm really not sure I follow you.");
                  $("#secondchoice").text("Oh, we have a team for that.");
                });
                $.doTimeout(12000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Oh, we have a team for that.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreNine',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("I'm really not sure I follow you.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreEight',
            pushpop_state: 'PushState'
        }

    },
    MoreEight:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("This is hard to explain over the phone.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("OK so - wait what was that>");                           
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("OK so - wait what was that>");                           
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6700, function() {
                    var dialogue = $("<p class='charactertexts-swat'></p>").text("GET ON THE GROUND NOW");                           
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(9700, function() {
                    $("#firstchoice").text("Final Report");
                    $("#secondchoice").text("Final Report");
                });
                 $.doTimeout(12700, function() {
                   $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Final Report");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Final Report");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        }

    },
    MoreNine:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Oh, perfect.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Great, it sounds like we can start a hostage exchange");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("When  can I meet the them?"); 
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(7000, function() {
                    var dialogue = $("<p class='charactertexts-swat'></p>").text("WE'RE RIGHT BEHIND YOU. GET ON THE GROUND MORON."); 
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(10000, function() {
                    $("#firstchoice").text("Final Report");
                    $("#secondchoice").text("Final Report");
                });
                $.doTimeout(13000, function() {
                    $("#userinputbar").show();

                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'SwatEnd',
            pushpop_state: 'PushState'
        }

    },
    SwatEnd: {
        enterState: {

            init_function: function() {
                    $("#conversation").empty();
                     $("#wrap").removeClass().addClass("commendation");
                     $("#name").text("Office of the Chief");
                     $("#typeofcontact").text("Commendation for Excellence");
                 $.doTimeout(1500, function () {
                var dialogue = $("<br><p id='pleasewait'class='w3-animate-fading w3-center'></p>").text("Please wait for situation results.");
                $("#conversation").append(dialogue);
                
           });
             $.doTimeout(1800000, function () { 
                $.doTimeout(6500, function () {
                $("#pleasewait").remove();
                var dialogue = $("<br><p class='w3-left-align'></p>").text("The chief would like to recognize the negotiator's exceptional abilities, and their unparalled decision making skills.");
                $("#conversation").append(dialogue);
                
           });
               $.doTimeout(9500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("The department recognizes that the negotiator went above and beyond the line of duty to save many innocent lives, and defusing a potentially extremely violent situation from occuring.");
                $("#conversation").append(dialogue);
                
           });
                $.doTimeout(12500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Not only did the negotiator remain cool under the pressur of his fellow officers, and against the threat of the criminals, the negotiator was able to see through deception and manipulate the criminals into not taking any lifes.");
                $("#conversation").append(dialogue);
                
           });
                 $.doTimeout(15500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("When SWAT was able to breach the building, they found all the hostages safe and also that the criminals were completely unaware of the rescue mission.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(18500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Because of this, the criminals immediately surrendered. ");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(21500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("This council believes that the negotiator acted with extreme sensitivity and intelligence.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(24500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("For that, we are all in the negotiaor's debt.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(27500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Our Final ruling is that the negotiaor be given a bravery medal by the mayor of our town at an official ceremony.");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(30000, function () {
                var dialogue = $("<br><a href='#index'></a>").text("The End");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(33500, function () {
          var dialogue = $("<br><p class='w3-center'></p>").text("To start a new game: Swipe down, hold, release.");
                $("#conversation").append(dialogue);
           
                
           });
             });

             }
        },
           swiperight: {
            init_function: function() {            
                $("#firstchoice").text("");
                $("#secondchoice").text("");

            }

           
        },
        swipeleft: {
            init_function: function() {
                
            }
           
        }
      },

     MoreTen: {
        enterState: {

            init_function: function() {
                
                //do timeout long hour delay
                $.doTimeout(3600000, function(){
                
                
                   $("#conversation").empty();
                   $("#wrap").removeClass().addClass("criminal");
                   $("#name").text("Local United Union City Bank");
                   $("#typeofcontact").text("Customer Service Number");
      
                
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll admit, you've been good so far.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("You've gone through with my demands.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("You've been really easy to deal with.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I just want to let you know that I appreciate you.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("If you keep this up, it looks  like we can end this peacefully.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("What do you say to that?");
                    $("#conversation").append(dialogue);
                });
               $.doTimeout(14000, function() {
                    $("#firstchoice").text("Whatever keeps everyone safe.");
                    $("#secondchoice").text("I'd like that.");
                });
                 $.doTimeout(17000, function() {
                    $("#userinputbar").show();
                });
                });


            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I'd like that.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreEleven',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
              $("#userinputbar").hide();

            },
            next_state: 'MoreEleven',
            pushpop_state: 'PushState'
        }

    },
    MoreEleven: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Good,  glad to hear it. Let's keep this up then, shall we? I have another 'request'.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Now, before you get mad. I just want you to know that you will like this request.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("You might not like it at first, but I think you're the kind of person who believe s in doing the right thing.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("You remember earlier when I was shooting out windows?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Well, in a fit of rage- my partner here accidently shot a hostage.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Now before you freak out.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Luckily we have a nurse in the building here with us.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(16000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("My partner, who feels  very sorry for what he did, wants to make things  right.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(18000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Are you open to trying to make things right?");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(20000, function() {
                    $("#firstchoice").text("What's the condition of the hostage?");
                    $("#secondchoice").text("Why didn't you tell me before?");
                });
                $.doTimeout(23000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Why didn't you tell me before?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreTwelve',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("What's the condition of the hostage?");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'MoreThirteen',
            pushpop_state: 'PushState'
        }

    },
    MoreTwelve: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I didn't know if I could trust you or not, OK?");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I didn't want you to send in your SWAT team before they were ready.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("That would just end up with a lot of people getting hurt.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("We wouldn't want that now would we?");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(10000, function() {
                    $("#firstchoice").text("Excuse me?");
                    $("#secondchoice").text("You're right. What's the condition of the hostage?");
                });
                $.doTimeout(13000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("You're right. What's the condition of the hostage?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreThirteen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Excuse me?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreThirteen',
            pushpop_state: 'PushState'
        }

    },
    MoreThirteen: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Well, at first she wasn't doing too well.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("But she got lucky");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("There was a nurse here, and combined with the first aid kit");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("The nurse reassures me that she can walk away from this, with no permanent damage.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("But she let me know, that the poor lady will need some more intensive  care.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("This poor lady that my partner shot is suffering really badly.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I  don't think anyone should suffer.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(16000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Are you willing to work with me  to help her?");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(18000, function() {
                    $("#firstchoice").text("Just tell me what you need");
                    $("#secondchoice").text("You really should have told me sooner.");
                });
                $.doTimeout(21000, function() {
                    $("#firstchoice").text("Just tell me what you need");
                    $("#secondchoice").text("You really should have told me sooner.");
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("You really should have told me sooner.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'MoreFourteen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Just tell me what you need");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreFifteen',
            pushpop_state: 'PushState'
        }

    },
    MoreFourteen: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I know, I know.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("But there isn't much we can do right now.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("so let's keep the past in the past shall we?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(9000, function() {
                $("#firstchoice").text("Fine, what  do you want.");
                $("#secondchoice").text("I have no other choice, do I?");
                });
                 $.doTimeout(12000, function() {
                $("#userinputbar").show();
                });
             }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I have no other choice, do I?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreEighteen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Fine, what  do you want.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'MoreEighteen',
            pushpop_state: 'PushState'
        }

    },
    MoreFifteen: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I like how easy you are to deal with.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Now, I know you're still trying to find a way in here.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("So, I'm gonna keep this simple.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("The 2 sides next to the building?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12500, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I want 2 ambulances on each side.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(15500, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("For anyone listening in on the conversation");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(18500, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Are you following me so far?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(21000, function() {
                $("#firstchoice").text("Yes");
                $("#secondchoice").text("Can you repeat that?");
                });
                $.doTimeout(24000, function() {
                $("#userinputbar").show();
                });
             },

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Can you repeat that?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreSeventeen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Yes");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreSixteen',
            pushpop_state: 'PushState'
        }

    },
    MoreSixteen: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("You've played so fair with me.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Because of how nice you have been.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'm gonna do something special for you.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I will admit, I do feel kinda bad that someone got hurt.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("So when you send the ambulances, I'm gonna give you more than just the nurse and injured hostage ok?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("But time is  ticking OK?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("The faster you get those ambulance here, the more hostages you get, OK?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(16000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll contact you after the exchange.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(19000, function() {
                $("#firstchoice").text("We'll be waiting");
                $("#secondchoice").text("We'll be waiting");
                });
                $.doTimeout(21000, function() {
                 $("#userinputbar").show();
                });
             }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'ExitEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'ExitEnd',
            pushpop_state: 'PushState'
        }

    },
    MoreSeventeen: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I like that you can make a joke in the middle of  the worst day of someone's life.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("It really speaks to your character.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Anyway, if you are that dumb you can simply scroll up.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("In the mean time, I'd like you to work  on my request.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll contact you after the exchange");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                $("#firstchoice").text("Wait for exchange");
                $("#secondchoice").text("Wait for exchange");
                });
                $.doTimeout(12000, function() {
                $("#userinputbar").show();
                });
             
            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoneyEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'MoneyEnd',
            pushpop_state: 'PushState'
        }

    },
    MoreEighteen: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("All I am asking for  is a few ambulances.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("That's all");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I want 2 ambulances on the left of the building");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("And 2 ambulances on the right of the building.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("When the time is right");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll send out the injured hostage, her nurse, and maybe some of the others.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("After that, we can discuss the release of the others.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(16000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("That sound good to you?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(17000, function() {
                $("#firstchoice").text("Fine");
                $("#secondchoice").text("Not good enough.");
                });
                 $.doTimeout(20000, function() {
                 $("#userinputbar").show();
                });
             }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Not good enough.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreNineteen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Fine");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'MoreTwenty',
            pushpop_state: 'PushState'
        }

    },
    MoreNineteen: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Well it's gonna have to be.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("Hopefully your EMT drivers won't be carrying guns on them.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("But you know what?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I trust you");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll talk to you after the exchange is complete.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                $("#firstchoice").text("We'll be ready");
                $("#secondchoice").text("We'll be ready");
                });
                 $.doTimeout(15000, function() {
                $("#userinputbar").show();
                });
             }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'MoreThirty',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'MoreThirty',
            pushpop_state: 'PushState'
        }

    },
    MoreTwenty: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("That's what I like to hear.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll contact you during the hostage exchange.");
                    $("#conversation").append(dialogue);
                });               
                $.doTimeout(7000, function() {
                $("#firstchoice").text("We'll be ready");
                $("#secondchoice").text("We'll be ready");
                });
                $.doTimeout(10000, function() {
                $("#userinputbar").show();
                });
             },

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("We'll be ready");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoneyEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("We'll be ready");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoneyEnd',
            pushpop_state: 'PushState'
        }

    },
    MoreThirty: {
        enterState: {

            init_function: function() {
               
                
                   $("#conversation").empty();
                   $("#wrap").removeClass().addClass("chief");
                   $("#name").text("Police Chief");
                   $("#typeofcontact").text("Secure Line");
    
                $.doTimeout(3000, function() {
                    
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("I've had enough of this.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("It's just three idiotrs in there.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("The media will be all over us if all of a sudden we have any ambulances.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("This has gone on much longer than it should have.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("It's three idiots who are in over there heads");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("SWAT I need you guys to breach");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                    var dialogue = $("<p class='charactertexts-chief></p>").text("Everyone off comms until the rescue operation is done.");
                    $("#conversation").append(dialogue);
                });               
                $.doTimeout(16000, function() {
                $("#firstchoice").text("Understood");
                $("#secondchoice").text("Roger");
                });
                 $.doTimeout(19000, function() {
                 $("#userinputbar").show();
                });
             },

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Roger");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'ExitEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Understood");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'ExitEnd',
            pushpop_state: 'PushState'
        }

    },
    MoneyEnd: {
        enterState: {

            init_function: function() {
                  $("#conversation").empty();
                   $("#wrap").removeClass().addClass("discipline");
                   $("#name").text("Disciplinary Review Council");
                   $("#typeofcontact").text("Decision Statement");
                 $.doTimeout(1500, function () {
                var dialogue = $("<br><p id='pleasewait'class='w3-animate-fading w3-center'></p>").text("Please wait for disciplinary action review results.");
                $("#conversation").append(dialogue);
                
           });
             $.doTimeout(1800000, function () { 
                $.doTimeout(6500, function () {
                $("#pleasewait").remove();
                var dialogue = $("<br><p class='w3-left-align'></p>").text("The chief recognizes that a negotiator's job is a tough one.");
                $("#conversation").append(dialogue);
                
           });
               $.doTimeout(9500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("A negotiator must constantly evalute their coworkers, and criminals behaviours and actions as part of a larger conspiracy plot.");
                $("#conversation").append(dialogue);
                
           });
                $.doTimeout(12500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Despite this, the negotiator managed to to turn a botched bank robbery, into a full fledged robbery.");
                $("#conversation").append(dialogue);
                
           });
                 $.doTimeout(15500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("When SWAT entered the building, they found all hostages in safe condition and unharmed. ");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(18500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("The criminals had successfully manipulated the negotiator, through means we are not sure of, and managed to not only steal the money from the intial robbery attempt, but also had time to rob the bank's vault. ");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(21500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Additionally, the criminals were able to escape and have not been caught.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(24500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("By involving the negotiator, the situation ended up becoming a lot worse, and consequently the entire department is under heavy ridicule from the media. ");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(27500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("The department must now dedicate considerable financial resources in a PR effort to help repair the image caused by the outcome.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(30500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("The council met to discuss what action should be taken. Given the negotiator's stellar history with the department, the negotiator will be reassigned until further notice.");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(33000, function () {
                var dialogue = $("<br><a href='#index'></a>").text("The End");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(33500, function () {
          var dialogue = $("<a href='#index'></a>").text("Go back to menu. Or swipe in the menu below to start a new game where you hopefully won't fall for blatant deception again.");
                $("#conversation").append(dialogue);
           });
            $.doTimeout(35500, function () {
         $("#firstchoice").text("New Game.");
          $("#secondchoice").text("New Game");
           });
           $.doTimeout(35500, function () {
        $("#userinputbar").show();
           });
             
             
            
        });

             }
        },
           swiperight: {
            next_state: 'FirstState'
            
        },
        swipeleft: {
            
            next_state: 'FirstState'
         
        }
      },
      ExitEnd: {
        enterState: {

            init_function: function() {
                   $("#conversation").empty();
                   $("#wrap").removeClass().addClass("discipline");
                   $("#name").text("Disciplinary Review Council");
                   $("#typeofcontact").text("Decision Statement");
                 $.doTimeout(1500, function () {
                var dialogue = $("<p id='pleasewait'class='w3-animate-fading w3-center'></p>").text("Please wait for disciplinary action review results.");
                $("#conversation").append(dialogue);
                
           });
             $.doTimeout(1800000, function () { 
                $.doTimeout(6500, function () {
                $("#pleasewait").remove();
                var dialogue = $("<p class='w3-left-align'></p>").text("The chief recognizes that a negotiator's job is a tough one.");
                $("#conversation").append(dialogue);
                
           });
               $.doTimeout(9500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("A negotiator must constantly evalute their coworkers, and criminals behaviours and actions as part of a larger conspiracy plot.");
                $("#conversation").append(dialogue);
                
           });
                $.doTimeout(12500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("For the bank robbery, the negotiators job was to ensure the safety of the hostages, and also aid the SWAT team in apprehending the criminals.");
                $("#conversation").append(dialogue);
                
           });
                 $.doTimeout(15500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("When SWAT entered the building, they found all hostages in safe condition and unharmed. ");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(18500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("The criminals had successfully manipulated the negotiator, through means we are not sure of, and managed to secure an exit before they could be apprehended. ");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(21500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("While this council is appreciative that no one was hurt during the encounter.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(24500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("By not apprehending the criminals, it sends a very strong and clear message to any future criminals in this city.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(27500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("Criminals will believe that with significant planning, and manipulation, they can get away with anything.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(30500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("For the years to come, the department will be faced with dealing with crimes from increasingly prepared criminals.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(33500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("Because of this, the negotiator has put the lives of his fellow officers and citizens at risk.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(33500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("We would normally reccomend termination, however the negotiator has a long and decorated career with us. The negotiator will be reassigned until further investigation has completed.");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(35000, function () {
                var dialogue = $("<a href='#index'></a>").text("Go back to menu. Or swipe in the menu below to start a new game where you hopefully won't fall for blatant deception again.");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(36500, function () {
          var dialogue = $("<p class='w3-left-align'></p>").text("To start a new game: Swipe down, hold, release.");
                $("#conversation").append(dialogue);
           
               $("#firstchoice").text("New Game.");
          $("#secondchoice").text("New Game");  
           });
           $.doTimeout(38500, function () {
          $("#userinputbar").show();
           });
             
            
        
    });

             }
        },
           swiperight: {
            next_state: 'FirstState'
            
        },
        swipeleft: {
            
            next_state: 'FirstState'
         
        }
      },   


    //moredemands-level section ends

    //employee-level section begins
    EmployeeOne: {
        enterState: {

            init_function: function() {
                $("#conversation").empty();
                     $("#wrap").removeClass().addClass("central");
                     $("#name").text("Central Comms Channel");
                     $("#typeofcontact").text("Active Situation Monitoring Only");
                $.doTimeout(2000, function() {
                    
                   var dialogue = $("<p class='charactertexts-dispatch'></p>").text("Dispatch here, we've got a emergency  operator on the line who says they have a bank employee on the line.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-dispatch'></p>").text("How do you want me to proceed?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("Send the employee through to the negotiator");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6500, function() {
                    var dialogue = $("<p class='charactertexts-dispatch'></p>").text("Roger");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(9000, function() {
                    $("#firstchoice").text("Move to Secure Channel");
                    $("#secondchoice").text("Move to secure channel");
                });
                $.doTimeout(10000, function() {
                     $("#userinputbar").show();
                });
               

             }
        },
           swiperight: {
            init_function: function() {            
               $("#userinputbar").hide();

            },

            next_state: 'EmployeeTwo',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
               $("#userinputbar").hide();

            },
            next_state: 'EmployeeTwo',
            pushpop_state: 'PushState'
        }
            

        
        

    },
    EmployeeTwo: {
        enterState: {

            init_function: function() {
                $("#conversation").empty();
                     $("#wrap").removeClass().addClass("employee");
                     $("#name").text("Unknown");
                     $("#typeofcontact").text("Secure Channel");
                $.doTimeout(2000, function() {
                   
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Hi, um, I'm Jessica one of the bank employees.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I was in the vault when everything happened.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I closed the vault door like we were told to do in these kinds of situations.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I've been kind of freaking out, and forgot what I was supposed to do.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(10000, function() {
                    $("#firstchoice").text("Is anyone hurt?");
                    $("#secondchoice").text("Are you safe?");
                });
                $.doTimeout(13000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Are you safe?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'EmployeeFour',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Is anyone hurt?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeThree',
            pushpop_state: 'PushState'
        }

    },
    EmployeeThree:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Well I can't see anything. I'm in the  vault.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I've been freaking out because  it's quiet and I'm  waiting for these guys to just burst in at any moment.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Please tell me you guys are coming in here soon."); 
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(8000, function() {
                    $("#firstchoice").text("We're working on getting you guys rescued.");
                    $("#secondchoice").text("We're doing everything we can.");
                });
                $.doTimeout(11000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("We're doing everything we can.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'EmployeeFive',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("We're working on getting you guys rescued.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeFour',
            pushpop_state: 'PushState'
        }

    },
    EmployeeFour:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Yeah, like I said I'm in the vault and locked away.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Wait, hold on. I have an idea. I think I know how I can help.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("There is supposed to be some button here, which can let you guys in.");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I'm gonna put down my phone for a few minutes. Stay on the line OK?");    
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(12000, function() {
                    $("#firstchoice").text("That's not safe");
                    $("#secondchoice").text("What are you doing?");
                });
                $.doTimeout(14000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("What are you doing?");
                $("#conversation").append(dialogue);
                $("#firstchoice").text("");
                $("#secondchoice").text("");

            },

            next_state: 'EmployeeSix',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("That's not safe");
                $("#conversation").append(dialogue);
                $("#firstchoice").text("");
                $("#secondchoice").text("");

            },
            next_state: 'EmployeeSix',
            pushpop_state: 'PushState'
        }

    },
    EmployeeFive:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("That's good to hear.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("WAIT!  I remember what they said at orientation."); 
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Ok, when the bank has a situation like this.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Bank employees are expected to always stay near the vault in case of robberies."); 
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("In the event of a robbery, the vault acts as a panic room.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I think it opens up some entrance  in the back for police to slip in the back");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Let me find it. Stay on the line.");   
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(17000, function() {
                $("#firstchoice").text("Um, OK");
                $("#secondchoice").text("What?");
                });
                $.doTimeout(20000, function() {
                $("#userinputbar").show();
                });

            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("What?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'EmployeeSix',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Um, OK");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeSix',
            pushpop_state: 'PushState'
        }

    },
    EmployeeSix:  {
        enterState: {

            init_function: function() {
                 $.doTimeout(600000, function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("OK, I found it.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("OK, so  basically this thing becomes a panic room.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("But what it does is that unlocks a door in the back so the police can come in to the vault directly.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(8000, function() {
                   var dialogue = $("<p class='charactertexts-employee'></p>").text("We're supposed to let any robbers come in here with the keys, and then shut the panic room behind them.");
                   $("#conversation").append(dialogue);
                });
                $.doTimeout(11000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Or we stay in here and let the police in");
                   $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                     var dialogue = $("<p class='charactertexts-employee'></p>").text("OK, so I'll press this button and you come in and rescue us. That's the plan, right?");
                   $("#conversation").append(dialogue);
                });
                $.doTimeout(17000, function() {
                   $("#firstchoice").text("Yes, I'll  let my SWAT team know.");
                $("#secondchoice").text("No,  leave this to us.  We don't want anyone getting hurt");
                });
                $.doTimeout(20000, function() {
                   $("#userinputbar").show();
                });
                 });


            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("No,  leave this to us.  We don't want anyone getting hurt");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'EmployeeSeven',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Yes, I'll  let my SWAT team know.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'EmployeeEight',
            pushpop_state: 'PushState'
        }

    },
    EmployeeSeven:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Please don't let me die.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I  want to go home to my kids.");                           
                    $("#conversation").append(dialogue);
                });
                
                $.doTimeout(6000, function() {
                    $("#firstchoice").text("I  know what this looks like. I need you to trust me.");
                    $("#secondchoice").text("Just stay safe. I'll let the rest of the team know about the room.");
                });
                $.doTimeout(8000, function() {
                     $("#userinputbar").show();
                    });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Just stay safe. I'll let the rest of the team know about the room.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'EmployeeTen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("I  know what this looks like. I need you to trust me.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeEleven',
            pushpop_state: 'PushState'
        }

    },
    EmployeeEight:  {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("OK, just have them positioned in the back of the building. It's where the room is");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("Thank you so much");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-employee'></p>").text("I'm so happy this is over."); 
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(9000, function() {
                    $("#firstchoice").text("It's what we do");
                    $("#secondchoice").text("It's my job");
                });
                $.doTimeout(9000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("It's my job");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'EmployeeNine',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("It's what we do");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeNine',
            pushpop_state: 'PushState'
        }

    },

     EmployeeNine: {
        enterState: {

            init_function: function() {
             $("#conversation").empty();
                   $("#wrap").removeClass().addClass("chief");
                   $("#name").text("Police Chief");
                   $("#typeofcontact").text("Secure Line");
                $.doTimeout(2000, function() {
                   
                    var dialogue = $("<p class='character-text'></p>").text("I'll give the order to have SWAT reposition themselves.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Get off comms now, and we'll wait for breach.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Let's hope SWAT doesn't get too upset ");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Nicely done.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(11000, function() {
                    $("#firstchoice").text("Glad to be back");
                    $("#secondchoice").text("Thanks");
                });
                $.doTimeout(14000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Thanks");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'EmployeeEnd', 
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Glad to be back");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeEnd', 
            pushpop_state: 'PushState'
        }

    },
    EmployeeTen: {
        enterState: {

            init_function: function() {
                 $("#conversation").empty();
                   $("#wrap").removeClass().addClass("chief");
                   $("#name").text("Police Chief");
                   $("#typeofcontact").text("Secure Line");
                $.doTimeout(2000, function() {
                  
                    var dialogue = $("<p class='character-text'></p>").text("I don't know about this.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I really don't like the idea.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("If something happens, and the rescue mission is botched.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("But we'll also look bad, if something happens and people find out she was working with us.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I guess we have no choice");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(12000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I'll give the order to SWAT");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(14000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Everyone off comms, prepare for breach");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(16000, function() {
                    $("#firstchoice").text("Standby");
                    $("#secondchoice").text("Standby");
                });
                $.doTimeout(16000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'EmployeeEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeEnd',
            pushpop_state: 'PushState'
        }

    },
    EmployeeEleven: {
        enterState: {
            

            init_function: function() {
                  $("#conversation").empty();
                   $("#wrap").removeClass().addClass("chief");
                   $("#name").text("Police Chief");
                   $("#typeofcontact").text("Secure Line");
                
                $.doTimeout(2000, function() {
                    newConversation();
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("Wait, what? What are you doing?");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("We could end this right now."); 
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(6000, function() {
                    $("#firstchoice").text("Seriously? 'Panic rooms' in banks don't exist");
                    $("#secondchoice").text("You really believed that?");
                });
                 $.doTimeout(6000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("You really believed that?");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'EmployeeTwelve',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Seriously? 'Panic rooms' in banks don't exist");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'EmployeeTwelve',
            pushpop_state: 'PushState'
        }

    },
    EmployeeTwelve: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("Oh");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("Nicely done");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("I imagine you just sent those idiots back to the drawing board");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("I'm sure they'll be contacting us again with their next trap sometime soon");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("Glad to have you back.");
                    $("#conversation").append(dialogue);
                });
                 $.doTimeout(14000, function() {
                    $("#firstchoice").text("Thanks");
                    $("#secondchoice").text("Good to be back.");
                });

                $.doTimeout(16000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'MoreTen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreTen',
            pushpop_state: 'PushState'
        }

    },
    EmployeeEnd: {
        enterState: {

            init_function: function() {
                 $("#conversation").empty();
                   $("#wrap").removeClass().addClass("discipline");
                   $("#name").text("Disciplinary Review Council");
                   $("#typeofcontact").text("Decision Statement");
               $.doTimeout(1500, function () {
                var dialogue = $("<p id='pleasewait' class='w3-animate-fading w3-center'></p>").text("Please wait for disciplinary action review results.");
               $("#conversation").append(dialogue);
                
           });
           $("<div class='w3-animate-fading'></div>").text("Generating Disciplinary Review. Please Wait.");
          
            $.doTimeout(1800000, function () { 

                $.doTimeout(6500, function () {
                $("#pleasewait").remove();
                var dialogue = $("<p class='w3-left-align'></p>").text("Negotiator exhibited extreme lack of judgement, and put lives at risks, and failed to see through deception.");
                $("#conversation").append(dialogue);
                
           });
                $.doTimeout(8500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("The negotiator has been employed for many years, and has succesfully resolved dozens of bank and other criminal scenarios.");
                $("#conversation").append(dialogue);
                
           });
                $.doTimeout(10500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("Because of the negotiator's length of service, they should be fully aware that no modern bank has a panic room.");
                $("#conversation").append(dialogue);
                
           });

               $.doTimeout(16500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("This council is utterly shocked that the negotiator could fall for such blatant deception.");
                $("#conversation").append(dialogue);
                
           });
               $.doTimeout(20500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("Not only did the criminals get away, but they were also able to steal more money than their intial target.");
                $("#conversation").append(dialogue);
                
           });
$.doTimeout(23500, function () {
                var dialogue = $("<p class='w3-left-align'></p>").text("While we are grateful that no civilians died, or officers died, this council rules that the negotiator be temporarily reassigned due to the ridicule the department has recived from the media.");
                $("#conversation").append(dialogue);
                
           });
$.doTimeout(26500, function () {
                var dialogue = $("<br><a href='#index'></a>").text("The End");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(27500, function () {
          var dialogue = $("<a href='#index'></a>").text("Go back to menu. Or swipe in the menu below to start a new game where you hopefully won't fall for blatant deception again.");
                $("#conversation").append(dialogue);
           
                
           });
            $.doTimeout(28500, function () {
          $("#firstchoice").text("New Game.");
          $("#secondchoice").text("New Game");
           
                
           });
           $.doTimeout(30000, function () {
           $("#userinputbar").show();
                
           });
      });

            }

        },
        swiperight: {
            next_state: 'FirstState'
            
        },
        swipeleft: {
            
            next_state: 'FirstState'
         
        }

    },

    //employee-level section ends

    //hostage-level section begins
     HostageOne: {
        enterState: {

            init_function: function() {
                
               
                $.doTimeout(3600000, function(){ 
                $("#userinputbar").hide();
                $("#conversation").empty();
                   $("#wrap").removeClass().addClass("central");
                   $("#name").text("Central Comms Channel");
                   $("#typeofcontact").text("Active Situation Monitoring Only");
                $.doTimeout(2000, function() {
                   
                    var dialogue = $("<p class='charactertexts-dispatch'></p>").text("Dispatch here, we've got a emergency  operator on the line who says they have a hostage on the line.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-dispatch'></p>").text("How do you want me to proceed?");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-chief'></p>").text("Send the hostage through to the negotiator");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-dispatch'></p>").text("Roger");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    $("#firstchoice").text("Go to chat");
                    $("#secondchoice").text("Go to chat");
                });
                $.doTimeout(12000, function() {
                    $("#userinputbar").show();

                });
                });
            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageTwo',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text();
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageTwo',
            pushpop_state: 'PushState'
        }

    },
    HostageTwo: {
        enterState: {

            init_function: function() {
               
                   $("#conversation").empty();
                     $("#wrap").removeClass().addClass("hostage");
                     $("#name").text("Unknown");
                     $("#typeofcontact").text("Secure Channel");
                   
                    $.doTimeout(3000, function() {
var dialogue = $("<p class='charactertexts-hostage'></p>").text("Hi, um im in the bank right now but I was in the bathroom when I heard gunshots.");
                    
                    $("#conversation").append(dialogue);
                    });
                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("No one has come in here to check  the ladies bathroom");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I just wanted to see if it's safe to come out yet or not");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("The dispatch lady then sent me to you guys.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(10000, function() {
                    $("#firstchoice").text("It's still an active situation. We're working on it.");
                    $("#secondchoice").text("We're doing everything we can, ok? We'll get you out of there soon.");

                });
                $.doTimeout(12000, function() {
                     $("#userinputbar").show();
                });

            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("We're doing everything we can, ok? We'll get you out of there soon.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },

            next_state: 'HostageThree',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
               
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("It's still an active situation. We're working on it.");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();
                
            },
            next_state: 'HostageThree',
            pushpop_state: 'PushState'
        }

    },
    HostageThree: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I know, I'm sure you are.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("Actually, I wanted to call you guys let you know that I can help end this.");

                   $("#conversation").append(dialogue);
                });

                $.doTimeout(6000, function() {
                    $("#firstchoice").text("What do you mean?");
                    $("#secondchoice").text("I don't want you putting yourself at risk.");
                });
                $.doTimeout(8000, function() {
                     $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I don't want you putting yourself at risk.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageFour',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("What do you mean?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageFour',
            pushpop_state: 'PushState'
        }

    },
    HostageFour: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I actually have my CCW license.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I carry a weapon with me at all times.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("Listen, I can take these guys. I can end this quicker than it started.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I  know how to take care of a threat.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("Can we coordinate our attacks?");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(12000, function() {
                    $("#firstchoice").text("That could work.");
                    $("#secondchoice").text("I don't think this is a good idea.");

                });
                $.doTimeout(15000, function() {
                     $("#userinputbar").show();

                });

            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I don't think this is a good idea.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageFive',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("That could work.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageTwelve',
            pushpop_state: 'PushState'
        }

    },
    HostageFive: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                   var dialogue = $("<p class='charactertexts-hostage'></p>").text("Listen, I can take these guys"); 
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I can take them I know it.");
                  $("#conversation").append(dialogue); 
                });
                $.doTimeout(6000, function() {
                    $("#firstchoice").text("Are you sure about this?");
                    $("#secondchoice").text("No, it's too risky.");
                 });
                 $.doTimeout(8000, function() {
                    $("#userinputbar").show();
                 });
               }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("No, it's too risky.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageSeven',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Are you sure about this?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageSix',
            pushpop_state: 'PushState'
        }

    },
    HostageSix: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                  var dialogue = $("<p class='charactertexts-hostage'></p>").text("Yeah, I've been on the shooting range all my life.");  
                   $("#conversation").append(dialogue); 
                });
                $.doTimeout(4000, function() {
                   var dialogue = $("<p class='charactertexts-hostage'></p>").text("I got this"); 
                  $("#conversation").append(dialogue); 
                });
                $.doTimeout(6000, function() {
                   var dialogue = $("<p class='charactertexts-hostage'></p>").text("This is my only chance out of this. "); 
                $("#conversation").append(dialogue);  
                });
                $.doTimeout(8000, function() {
                  var dialogue = $("<p class='charactertexts-hostage'></p>").text("Hopefully I'll see you in a few minutes.");  
                $("#conversation").append(dialogue);  
                });
                $.doTimeout(10000, function() {
                 var dialogue = $("<p class='charactertexts-hostage'></p>").text("Bye");   
                $("#conversation").append(dialogue);    
                });
                $.doTimeout(12000, function() {
                 $("#firstchoice").text("Clear Chat");
                $("#secondchoice").text("Clear Chat");   
                });
                $.doTimeout(15000, function() {
                  $("#userinputbar").show();
                });
                
              }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'NorbertEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'NorbertEnd',
            pushpop_state: 'PushState'
        }

    },
    HostageSeven: {
        enterState: {
        
            init_function: function() {
                    $.doTimeout(12000, function() {
                      var dialogue = $("<p class='charactertexts-hostage'></p>").text("Too risky?");  
                       $("#conversation").append(dialogue);  
                    });
            $.doTimeout(15000, function() {
                var dialogue = $("<p class='charactertexts-hostage'></p>").text("Listen, ok? I have the right to defend myself.");
                $("#conversation").append(dialogue);
            });
            $.doTimeout(19000, function() {
                var dialogue = $("<p class='charactertexts-hostage'></p>").text("I'm not gonna sit in the bathroom and wait  for some one to rescue me.");
                 $("#conversation").append(dialogue);
            });
            $.doTimeout(21000, function() {
               $("#firstchoice").text("What if someone gets hurt during your rescue?");
                $("#secondchoice").text("You're right. I can't stop you from doing anything.");  
                
                });
                $.doTimeout(24000, function() {
                $("#userinputbar").show();
                
                });
            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("You're right. I can't stop you from doing anything.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageTen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("What if someone gets hurt during your rescue?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageEight',
            pushpop_state: 'PushState'
        }

    },
    HostageEight: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                  var dialogue = $("<p class='charactertexts-hostage'></p>").text("Then what about if someone dies in there, while I sit in the bathroom with a wasted opportunity to save their life?");  
                   $("#conversation").append(dialogue); 
                });
                $.doTimeout(4000, function() {
                 var dialogue = $("<p class='charactertexts-hostage'></p>").text("What happens then?");   
                $("#conversation").append(dialogue);   
                });
                $.doTimeout(6000, function() {
                  $("#firstchoice").text("Are you sure you can handle  this?");
                $("#secondchoice").text("In these types of situations, we've found that it's not always best to go in guns blazing.");   
                    
                });
                $.doTimeout(8000, function() {
                 $("#userinputbar").show();
                });
                }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("In these types of situations, we've found that it's not always best to go in guns blazing.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageTen',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Are you sure you can handle  this?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageNine',
            pushpop_state: 'PushState'
        }

    },
    HostageNine: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                   var dialogue = $("<p class='charactertexts-hostage'></p>").text("I can do this.");  
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I won't be able to live with myself if someone dies and I'm just sitting in the bathroom with their only chance of survival");
                    $("#conversation").append(dialogue);
                });
                
                
                $.doTimeout(6000, function() {
               var dialogue = $("<p class='charactertexts-hostage'></p>").text("You guys get ready. I'll let you in the front door soon.");     
                 $("#conversation").append(dialogue);  
                });
                $.doTimeout(8000, function() {
                  var dialogue = $("<p class='ccharactertexts-hostage'></p>").text("I'll see you guys in a few minutes.");  
                  $("#conversation").append(dialogue); 
                });
                $.doTimeout(10000, function() {
                $("#firstchoice").text("Sounds good.");
                $("#secondchoice").text("We'll be waiting.");
                
                });
                $.doTimeout(12000, function() {
                $("#userinputbar").show();
                
                });
              }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text();
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'NorbertEnd',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text();
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'NorbertEnd',
            pushpop_state: 'PushState'
        }

    },
    HostageTen: {
        enterState: {
           
            
            
            
            

            init_function: function() {
                $.doTimeout(2000, function() {
                var dialogue = $("<p class='charactertexts-hostage'></p>").text("You just want me to sit in here and do nothing?");   
                $("#conversation").append(dialogue); 
                });
                $.doTimeout(4000, function() {
                    $("#firstchoice").text("I'm just trying to keep everyone safe");
                    $("#secondchoice").text("Like I said, You're right I can't stop you");  
                });
                $.doTimeout(4000, function() {
                     $("#userinputbar").show();
                });
             

            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Like I said, You're right I can't stop you");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageNine',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("I'm just trying to keep everyone safe");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageEleven',
            pushpop_state: 'PushState'
        }

    },
    HostageEleven: {
        enterState: {

            init_function: function() {
                $.doTimeout(4000, function() {
                var dialogue = $("<p class='charactertexts-hostage'></p>").text("Guess I'm on my own.");       
                $("#conversation").append(dialogue);
                
                });
                 $.doTimeout(6000, function() {
               $("#firstchoice").text("End Chat");
                    $("#secondchoice").text("End Chat");
                
                });
                 $.doTimeout(6000, function() {
               $("#userinputbar").show();
                
                });
            

            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text();
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'MoreOne',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text();
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MoreOne',
            pushpop_state: 'PushState'
        }

    },
    HostageTwelve: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("OK, so there are  two guys with weapons");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("There is a big guy, and some other weird guy.");
                   $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("I'll take out the big guy first");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("And I think the shock from seeing his buddy die will make the weird guy freeze");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='charactertexts-hostage'></p>").text("And I think the shock from seeing his buddy die will make the weird guy freeze");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12000, function() {
                    $("#firstchoice").text("It's the best shot we got.You sure about this?");
                    $("#secondchoice").text("That's a terrible idea. Don't do anything like that.");

                });
                $.doTimeout(15000, function() {
                     $("#userinputbar").show();

                });
            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("That's a terrible idea. Don't do anything like that.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'HostageFive',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("It's the best shot we got.You sure about this?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'HostageSix',
            pushpop_state: 'PushState'
        }

    },
    
    NorbertEnd: {
        enterState: {

            init_function: function() {
                   $("#conversation").empty();
                   $("#wrap").removeClass().addClass("discipline");
                   $("#name").text("Disciplinary Review Council");
                   $("#typeofcontact").text("Decision Statement");
                 $.doTimeout(1500, function () {
                var dialogue = $("<br><p id='pleasewait'class='w3-animate-fading w3-center'></p>").text("Please wait for disciplinary action review results.");
                $("#conversation").append(dialogue);
                
           });
             $.doTimeout(3600000, function () { 
                $.doTimeout(6500, function () {
                $("#pleasewait").remove();
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Negotiator exhibited extreme lack of judgement, and and consequently put lives at risks");
                $("#conversation").append(dialogue);
                
           });
               $.doTimeout(9500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("The negotiator knowingly send in a civilian with no formal weapons training into combar");
                $("#conversation").append(dialogue);
                
           });
                $.doTimeout(12500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("After SWAT was able to breach the building, they found one of the surviving criminals ready for surrender");
                $("#conversation").append(dialogue);
                
           });
                 $.doTimeout(15500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Upon interrogation, it was found out that the criminal who had surrended, 'Norbert' was friends with the other two criminals");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(18500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Norbert admits that he was suffering from a sever episode of psychosis and forced his friends to commit the crime.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(21500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Upon review of the bank's security camera's Norbert's story was found to have some merit to it, because the 'hostage' the negotiator spoke to was actually one of the criminals who was attempting some contrived way to get a pardon. ");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(24500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("This council believes that had the negotiator not acted with such brash and reckless regard for human life, the situation could have ended without any deaths.");
                $("#conversation").append(dialogue);
                
           });
           $.doTimeout(27500, function () {
                var dialogue = $("<br><p class='w3-left-align'></p>").text("Our Final ruling is that, while there were no hostage deaths and keeping in mind the record of the negotiator, the negotiator will be temporarily reassigned until they can prove themselves to be at their usual level of performance.");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(30000, function () {
                var dialogue = $("<br><a href='#index'></a>").text("The End");
                $("#conversation").append(dialogue);
                
           });
            $.doTimeout(33500, function () {
          var dialogue = $("<a href='#index'></a>").text("Go back to menu. Or swipe in the menu below to start a new game where you hopefully won't fall for blatant deception again.");
                $("#conversation").append(dialogue);
           });
               $.doTimeout(35500, function () {
          $("#firstchoice").text("New Game.");
          $("#secondchoice").text("New Game");
           });
           $.doTimeout(37000, function () {
          $("#userinputbar").show();
           });
             
            
        });

             }
        },
           swiperight: {
            next_state: 'FirstState'
            
        },
        swipeleft: {
            
            next_state: 'FirstState'
         
        }

    },


    //hostage-level section ends

    //Firstdemands-level section begins
     DemandsOne: 
{
        enterState:
        {
            init_function: function () {
               $("#userinputbar").hide();
                $("#conversation").empty();
                   $("#wrap").removeClass().addClass("central");
                   $("#name").text("Central Comms Channel");
                   $("#typeofcontact").text("Active Situation Monitoring Only");
               $.doTimeout(1500, function () {
                var dialogue = $("<p id='pleasewait' class='w3-animate-fading w3-center'></p>").text("Connecting To Active Situation Channel");
               $("#conversation").append(dialogue);
                
           });
               
                $.doTimeout(1020000, function () {
                    $.doTimeout(3000, function () {
                       $("#pleasewait").remove();
                       $("#userinputbar").show();
                        var dialogue = $("<p class='character-text'></p>").text("OK everyone, this is the first on scene meeting of the hostage situation.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(4000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("We've got three criminals who tried to rob a bank truck.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(6000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("They failed miserably, and in their panic, they decided to take everyone in the lobby as hostage.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(8000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Right now, we're estimating 10 hostages inside the building. Possibly more.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(10000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("The good news, is that they chose to hole themselves up in a bank.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(12000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("These idiots didn't realize that most modern banks are designed for these kinds of situations.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(14000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Another thing we have in our favor is that we have the department's most decorated negotiator here with us to help make sure nothing dangerous happens.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(16000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Despite what the SWAT team tells girls at bars, negotiators have the toughest job out of all of us.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(18000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("A negotiator's job in this kind of situation is to keep the hostage takers sane enough until our SWAT team can swoop in and complete their rescue operation.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(20000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Let's make sure we're all VERY clear about the situation we have at hand right now.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(22000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("We have 3 criminals, who started out the day thinking they were gonna make some quick and easy money.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(24000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Instead, they screwed that up and now they're sitting ducks and  trying to figure out how to get out of there.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(26000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("The ABSOLUTE  last thing I want them thinking is that it's only a matter of time before we bust in there and capture them.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(28000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("We want them them to think that we're playing by their rules, and that we're not setting up a rescue mission");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(30000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("These guys probably have pretty short fuses. If they feel threatened, they will take the life of a hostage.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(32000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("This means our SWAT teams, and their backups better not do ANYTHING that may expose their location.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(34000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("While SWAT is setting up, our negotiator's job is to keep things calm and quiet. Additonally, armed officers will be standing guard around the building");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(36000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("I will switch to private comms to get the operation started.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(39000, function () {
                        $("#firstchoice").text("Go to secure chat");
                    $("#secondchoice").text("Go to secure chat");

                    });
                    $.doTimeout(43000, function () {
                         $("#userinputbar").show();

                    });
                });
            
                }
        },
        swiperight: {
            init_function: function () {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Go to secure chat");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();
            },
            next_state: 'DemandsTwo',
            pushpop_state: 'PushState'
            

        },
        swipeleft: {
            init_function: function () {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Go to secure chat");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();
            },
            next_state: 'DemandsTwo',
            pushpop_state: 'PushState'
        }
    },
    DemandsTwo: {
        enterState:
        {
            init_function: function () {
                   $("#conversation").empty();
                   $("#wrap").removeClass().addClass("chief");
                   $("#name").text("Police Chief");
                   $("#typeofcontact").text("Secure Line");
    

                $.doTimeout(1500, function () {
                   
                    var dialogue = $("<p class='character-text'></p>").text("Alright, you want to make first contact or let the criminals contact us?");
                    $("#conversation").append(dialogue);
                });


                $.doTimeout(4500, function () {
                    $("#firstchoice").text("Make First Contact");
                    $("#secondchoice").text("Wait for criminals to contact.");
                });
                $.doTimeout(6500, function () {
                     $("#userinputbar").show();
                });
            }
        },
        swiperight: {
            init_function: function () {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Wait for criminals to contact.");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();

            },
            next_state: 'FirstThree',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function () {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Make First Contact");
                $("#conversation").append(dialogue);
               $("#userinputbar").hide();
            },
            next_state: 'FirstFive',
            pushpop_state: 'PushState'
        }
    },
    FirstThree: {
        enterState:
        {
            init_function: function () {
                $.doTimeout(1500, function () {
                var dialogue = $("<p class='character-text'></p>").text("Alright make sure you check back in periodically. We don't know what they're doing in there, but I trust that you know what you're doing.");
                        $("#conversation").append(dialogue);
                });
               $.doTimeout(3600000, function () {
                        $("#conversation").empty();
                        $("#wrap").removeClass().addClass("central");
                         $("#name").text("Central Comms Channel");
                         $("#typeofcontact").text("Active Situation Monitoring Only");
                    
                    $.doTimeout(1500, function () {
                        
                        var dialogue = $("<p class='charactertexts-dispatch'></p>").text("Reports of gunfire, status?");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(3000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("Wasn't my guys,  some windows got shot  out");
                        $("#conversation").append(dialogue);
                    });

                    $.doTimeout(6000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Any casualties?");
                        $("#conversation").append(dialogue);
                    });

                    $.doTimeout(9000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("Negative, just some damage to surronding area.");
                        $("#conversation").append(dialogue);
                    });

                    $.doTimeout(12000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Good.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(15000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Okay, let's assume they want our attention");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(18000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("We're forced to contact them now.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(21000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("I'm  starting a line for you on the inside. Get ready.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(23500, function () {
                        $("#firstchoice").text("Begin Contact");
                        $("#secondchoice").text("Begin Contact");
                    });
                    $.doTimeout(26500, function () {
                         $("#userinputbar").show();
                    });

                });
            }
        },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("Begin Contact");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstFour',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("Begin Contact");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'FirstFour',
                pushpop_state: 'PushState'
            }
        },
        FirstFour: {
            enterState:
            {
                init_function: function () {
                   $("#conversation").empty();
                   $("#wrap").removeClass().addClass("criminal");
                   $("#name").text("Local United Union City Bank");
                   $("#typeofcontact").text("Customer Service Number");


                    $.doTimeout(1500, function () {
                      
                        var dialogue = $("<p class='charactertexts-dispatch'></p>").text("*ESTABLISHING CONTACT");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(3000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I knew that would get your attention. I'm assuming you speak for the police?");
                        $("#conversation").append(dialogue);
                    });

                    $.doTimeout(7000, function () {
                        $("#firstchoice").text("Yes, and I want you to know I only care about getting those hostages in there released. How can we arrange this?");
                        $("#secondchoice").text("Yes, and  i'm charge of keeping those hostages you are holding safe. What can I do to make sure they go home alive tonight?");
                    });
                     $.doTimeout(10000, function () {
                         $("#userinputbar").show();
                        });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("Yes, and  I'm in charge of keeping those hostages you are holding safe. What can I do to make sure they go home alive tonight?");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstSeven',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("Yes, and I want you to know I only care about getting those hostages in there released. How can we arrange this?");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstSix',
                pushpop_state: 'PushState'
            }
        },
        FirstFive: {
            enterState:
            {
                init_function: function () {
                    
                  $("#conversation").empty();
                   $("#wrap").removeClass().addClass("criminal");
                   $("#name").text("Local United Union City Bank");
                   $("#typeofcontact").text("Customer Service Number");


                    $.doTimeout(1500, function () {
                      
                        var dialogue = $("<p class='charactertexts-dispatch'></p>").text("*ESTABLISHING CONTACT*");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(4500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'm assuming this is the police?");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(7500, function () {
                        $("#firstchoice").text("Yes, and I want you to know I only care about getting those hostages in there released. How can we arrange this?");
                        $("#secondchoice").text("Yes, and i'm in charge of keeping those hostages you are holding safe. What can I do to make sure they go home alive tonight?");
                    });
                    $.doTimeout(10500, function () {
                         $("#userinputbar").show();
                        });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("Yes, and  in charge of keeping those hostages you are holding safe. What can I do to make sure they go home alive tonight?");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'FirstSeven',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("Yes, and I want you to know I only care about getting those hostages in there released. How can we arrange this?");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'FirstSix',
                pushpop_state: 'PushState'
            }
        },
        FirstSix: {
            enterState:
            {
                init_function: function () {
                    $.doTimeout(1500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("You only care about releasing the hostages?");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(4500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("You think I'm dumb?");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(8000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Do you think I'm just gonna release all or any of the hostages now, and then you'll give me some free pass?");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(11000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Let's be clear, I know how this ends.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(14000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I know very well that it doesn't end with me on a plane fleeing to another country. ");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(17000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("It ends with either everyone in this building getting murdered , or everyone goes home safe and sound.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(20000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Do not contact this phone again. I will contact you if I feel like trading a hostage for something.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(23000, function () {
                        $("#firstchoice").text("Swipe to clear");
                        $("#secondchoice").text("Swipe to clear");
                    });
                    $.doTimeout(24000, function () {
                         $("#userinputbar").show();
                    });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstEight',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstEight',
                pushpop_state: 'PushState'
            }
        },
        FirstSeven: {
            enterState:
            {
                init_function: function () {

                    $.doTimeout(1500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Let's be clear, no one has to get hurt.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(2500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("But if you make one move without me knowing about it.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(3500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I have no problem with taking lives.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(4500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("We all want to go home safe and sound without any bloodshed.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(5500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Are you ready for my first demand?");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(8000, function () {
                        $("#firstchoice").text("I am");
                        $("#secondchoice").text("This isn't a movie, you don't get any demands.");
                    });
                    $.doTimeout(11000, function () {
                         $("#userinputbar").show();
                    });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("This isn't a movie, you don't get any demands.");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstTen',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("I am");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstNine',
                pushpop_state: 'PushState'
            }
        },
       
        FirstEight: {
            enterState:
            {
                init_function: function () {
                     $.doTimeout(3000, function () {
                    $("#conversation").empty();
                     $("#wrap").removeClass().addClass("central");
                     $("#name").text("Central Comms Channel");
                     $("#typeofcontact").text("Active Situation Monitoring Only");
                    $.doTimeout(1500, function () {
                        var dialogue = $("<p class='charactertexts-dispatch'></p>").text("More gunfire reported, SWAT check in");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(3000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("They  shooting out more windows?");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(4000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("Negative, those bullets stayed inside the building that time.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(5000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("What's going on inside?");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(8000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("We just hear a lot of screaming sir.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(11000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("Prepare for breach, but don't get sloppy.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(13000, function () {
                        var dialogue = $("<p class='character-text'></p>").text("We'll wait for next contact in the meantime. ");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(13000, function () {
                        $("#firstchoice").text("SWIPE TO CLEAR");
                        $("#secondchoice").text("SWIPE TO CLEAR");
                    });
                     $.doTimeout(16000, function () {
                        $("#userinputbar").show();
                    });
                     });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstEleven',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'FirstEleven',
                pushpop_state: 'PushState'
            }
        },
        FirstNine: {
            enterState:
            {
                init_function: function () {
                    $.doTimeout(1500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Before we get started, I'm just going to take a quick peek out the windows.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(3000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'd like to see how clever your SWAT team really  is.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(6000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll contact you when I'm done.");
                        $("#conversation").append(dialogue);
                    });


                    $.doTimeout(7000, function () {
                        $("#firstchoice").text("SWIPE TO CLEAR CHAT");
                        $("#secondchoice").text("SWIPE TO CLEAR CHAT");
                    });
                    $.doTimeout(8000, function () {
                         $("#userinputbar").show();
                    });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'FirstEleven',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstEleven',
                pushpop_state: 'PushState'
            }
        },
        FirstTen: {
            enterState:
            {
                init_function: function () {
                    $.doTimeout(1500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Then you don't get to save all the hostages.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(3000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I want you to listen to this.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(5000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("*BANG*");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(7000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("*SCREAMS*");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(9000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("The next time I contact you, I want you to remember that I have nothing to lose.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(10500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("You just caused the death of someone who was probably here to deposit their paycheck.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(12500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("How about the next person I kill be someone that was here because they were trying to get a home loan?");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(15500, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Or actually, better yet.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(20000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("ANYONE HERE IN THE BANK TODAY TO DISPUTE AN OVERDRAFT FEE? ");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(23000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("OR MAYBE HAD THEIR IDENTITY STOLEN?");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(26000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Now listen, can you imagine never getting to see someone you loved again, because they were murdered running an errand they didn't want to do in the first place?");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(29000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll contact you with my demands.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(32000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("When I'm ready.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(31000, function () {
                        $("#firstchoice").text("SWIPE TO CLEAR CHAT");
                        $("#secondchoice").text("SWIPE TO CLEAR CHAT");
                    });
                    $.doTimeout(33000, function () {
                        $("#userinputbar").show();
                    });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'FirstEleven',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstEleven',
                pushpop_state: 'PushState'
            }
        },
        FirstEleven: {
            enterState:
            {
                init_function: function () {
                    //long function TODO: LONG FUNCTION HERE
                    $.doTimeout(10800000, function () {
                          $("#conversation").empty();
                            $("#wrap").removeClass().addClass("criminal");
                            $("#name").text("Local United Union City Bank");
                            $("#typeofcontact").text("Customer Service Number");

                        $.doTimeout(1500, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("OK I've been looking outside.");
                            $("#conversation").append(dialogue);

                        });
                        $.doTimeout(3000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("A lot of SWAT officers  surrounding the building.");
                            $("#conversation").append(dialogue);
                        });
                        $.doTimeout(6000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("I bet you think I'm gonna ask you to remove them all from the area.");
                            $("#conversation").append(dialogue);
                        });
                        $.doTimeout(9000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("Then you'll make up some lie about 'sure thing, I'll get right on it.'");
                            $("#conversation").append(dialogue);
                        });
                        $.doTimeout(12000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("You may even tell me some cool sounding thing like 'official protocol this'");
                            $("#conversation").append(dialogue);
                        });
                        $.doTimeout(15000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("Official Protocol that");
                            $("#conversation").append(dialogue);
                        });
                        $.doTimeout(18000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("I want you to simply move the SWAT team on the left side of the building 250 feet back.");
                            $("#conversation").append(dialogue);
                        });
                        $.doTimeout(21000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("That's it.");
                            $("#conversation").append(dialogue);
                        });
                        $.doTimeout(24000, function () {
                            var dialogue = $("<p class='charactertexts-criminal'></p>").text("That's an easy demand, right?");
                            $("#conversation").append(dialogue);
                        });


                        $.doTimeout(17000, function () {
                            $("#firstchoice").text("We don't have anyone in that area.");
                            $("#secondchoice").text("It is protocol, but let me see what I can do.");
                        });
                        $.doTimeout(19000, function () {
                             $("#userinputbar").show();
                        });
                    }); //long function ends
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("It is protocol, but let me see what I can do.");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstThirteen',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("We don't have anyone in that area.");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstTwelve',
                pushpop_state: 'PushState'
            }
        },
        FirstTwelve: {
            enterState:
            {
                init_function: function () {
                    $.doTimeout(1500, function () {
                        var dialogue =$("<p class='charactertexts-criminal'></p>").text("I'm disappointed in you.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(3000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I see you like to play with the lives of others.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(6000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("Well I'm gonna sit here and think about whose life I am going to take.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(9000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("While I'm doing that, please tell the SWAT  team to adequately prepare themselves.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(12000, function () {
                        var dialogue = $("<p class='charactertexts-criminal'></p>").text("I'll contact you soon.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(14000, function () {
                        $("#firstchoice").text("End Chat");
                        $("#secondchoice").text("End Chat");
                    });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'HostageOne',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'HostageOne"',
                pushpop_state: 'PushState'
            }
        },
        FirstThirteen: {
            enterState:
            {
                init_function: function () {
                  
                
                     $("#conversation").empty();
                   $("#wrap").removeClass().addClass("chief");
                   $("#name").text("Police Chief");
                   $("#typeofcontact").text("Secure Line");
    
               
                    
                    $.doTimeout(1500, function () {
                       
                        var dialogue = $("<p class='charactertext'></p>").text("I'll check  in with SWAT and see what they can do.");
                        $("#conversation").append(dialogue);

                    });
                     $.doTimeout(8000, function () {
                    $("#firstchoice").text("Sounds Good");
                    $("#secondchoice").text("Roger");
               });
               $.doTimeout(8500, function () {
                   $("#userinputbar").show();
                });


                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("Roger");
                    $("#conversation").append(dialogue);
                   $("#userinputbar").hide();

                },
                next_state: 'FirstFourteen',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("Sounds Good");
                    $("#conversation").append(dialogue);
                  $("#userinputbar").hide();

                },
                next_state: 'FirstFourteen',
                pushpop_state: 'PushState'
            }
        },
        FirstFourteen: {
            enterState:
            {
                
                init_function: function () {
                    $("#conversation").empty();
                     $("#wrap").removeClass().addClass("central");
                     $("#name").text("Central Comms Channel");
                     $("#typeofcontact").text("Active Situation Monitoring Only");
                    $.doTimeout(1500, function () {
                       
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("Are you two serious?");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(3000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("How long have both you guys been handling these kinds of situations?");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(4000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("First off, we have the entire building surrounded.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(8000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("But my SWAT team isn't exposed.");
                        $("#conversation").append(dialogue);
                    });
                    $.doTimeout(11000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("This guy is buying time.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(12000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("He's gonna say 'NOT THAT LEFT THE OTHER LEFT'");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(15000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("In the mean time he's buying time and causing confusion and screwing up my rescue operation.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(18000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("I'm gonna go ahead and do both of your jobs, instead of you two horribly trying to do my job.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(21000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("Do nothing.  Just  say nothing. When he contacts you again, simply say 'We moved them.'. That's it.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(24000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("You really think he's gonna sit there and argue with you and say 'No you didn't move them far enough?'");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(27000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("Now I'm gonna finish getting my guys into position.");
                        $("#conversation").append(dialogue);

                    });
                    $.doTimeout(30000, function () {
                        var dialogue = $("<p class='charactertexts-swat'></p>").text("If I hear another gunshot, me and my guys are busting in there.");
                        $("#conversation").append(dialogue);

                    });

                    $.doTimeout(31000, function () {
                        $("#firstchoice").text("Understood");
                        $("#secondchoice").text("Roger");
                    });
                    $.doTimeout(33000, function () {
                       $("#userinputbar").show();
                    });
                }
            },
            swiperight: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-right'></p><br>").text("Roger");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'EmployeeOne',
                pushpop_state: 'PushState'

            },
            swipeleft: {
                init_function: function () {
                    var dialogue = $("<p class='player-chose-left'></p><br>").text("Understood");
                    $("#conversation").append(dialogue);
                    $("#userinputbar").hide();

                },
                next_state: 'EmployeeOne',
                pushpop_state: 'PushState'
            }
        },



    //Firstdemands-level section ends

    //Tutorial-level section begins
    FirstState: {
        enterState: {

            init_function: function() {
                $("#conversation").empty();
                $("#wrap").removeClass().addClass("sarge");
                $("#name").text("Sarge");
                $("#typeofcontact").text("Unknown");
                $("#userinputbar").hide();

                $.doTimeout(3000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I know it's not under the best circumstances, but i'm glad to see you again.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(5000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("It's been a long time.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    $("#firstchoice").text("It has.");
                    $("#secondchoice").text("I was told you needed my help");
                });
                $.doTimeout(8500, function() {
                    $("#userinputbar").show();
                });


            }

        },

        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I was told you needed my help");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();



            },
            next_state: 'TutorialTwo',
            pushpop_state: 'PushState'


        },
        swipeleft: {
            init_function: function() {

                var dialogue = $("<p class='player-chose-left'></p><br>").text("It has, what's going on?");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();


            },

            next_state: 'TutorialTwo',
            pushpop_state: 'PushState'
        }


    },
    TutorialTwo: {
        enterState: {

            init_function: function() {
                $.doTimeout(2000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("We've got a hostage situation, and we need your expertise.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(4000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("About an hour ago, three idiots completely botched a bank robbery, and took everyone in the hospital lobby as hostages");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(7000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I know you're on medical leave, but we need you.");
                    $("#conversation").append(dialogue);
                });

                $.doTimeout(8000, function() {

                    $("#firstchoice").text("I don't think I can manage a situation right now.");
                    $("#secondchoice").text("I'm just not ready.");

                });
                $.doTimeout(9000, function() {
                    $("#userinputbar").show();
                });



            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I'm just not ready.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'TutorialThree',
            pushpop_state: 'PushState'
        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("I don't think I can manage a situation right now.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },

            next_state: 'TutorialThree',
            pushpop_state: 'PushState'
        }

    },
    TutorialThree: {
        enterState: {
            init_function: function() {







                $.doTimeout(3000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I know you've had a tough time dealing with what happened.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I know you hear this all the time, but there was nothing you could have done.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("He was a psychopath.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(10000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("You were perfect. You made the right calls.");
                    $("#conversation").append(dialogue);

                });

                $.doTimeout(12000, function() {
                    $("#firstchoice").text("You're right, I'll deal with it and help out.");
                    $("#secondchoice").text("I'm not ready.");
                });
                $.doTimeout(14000, function() {
                    $("#userinputbar").show();
                });
            }
        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I appreciate that, but I'm not ready to handle another hostage situation. I spoke with the counselor prior to the call and was reassured I didn't have to if I felt I wasn't ready.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'TutorialFour',
            pushpop_state: 'PushState'
        },

        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("You're right, I'll deal with it and help out.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'TutorialSix',
            pushpop_state: 'PushState'

        }

    },
    TutorialFour: {
        enterState: {
            init_function: function() {




                $.doTimeout(3000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("OK, look");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(5000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I need to get the team together to do our first on scene meeting.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(7000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("You really want to let them down?");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(9000, function() {
                    $("#firstchoice").text("Fine, but I'm going against my will");
                    $("#secondchoice").text("The answer will still be no");
                });
                $.doTimeout(10000, function() {
                    $("#userinputbar").show();

                });
            }
        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("The answer will still be no");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'TutorialFive',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function() {

                var dialogue = $("<p class='player-chose-left'></p><br>").text("Fine, but I'm going against my will.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'TutorialSeven',
            pushpop_state: 'PushState'
        }
    },
    TutorialFive: {
        enterState: {
            init_function: function() {



                $.doTimeout(3000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("OK I've had enough of this. Look we need you.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(5000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("If you don't show up, I'll be forced to take disciplinary measures against you.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(7000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I didnt want it to be like this, but you've left me no choice.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8000, function() {
                    $("#firstchoice").text("Fine, I'll go.");
                    $("#secondchoice").text("I'm on medical leave.");
                });
                $.doTimeout(10000, function() {
                    $("#userinputbar").show();
                });
            }
        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("I'm on medical leave.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'MadOne',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Fine, I'll go");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'TutorialEight',
            pushpop_state: 'PushState'
        }
    },
    TutorialSix: {
        enterState: {
            init_function: function() {





                $.doTimeout(1500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Glad to have you back!");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(3000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Before we get you started. The brainiacs over at CG have upgraded the linkphones.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(6000, function() {

                    var dialogue = $("<p class='character-text'></p>").text("I just put in the request for your linkphone software to update.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(9000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Give it like 15-20 minutes or so to update.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(13000, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I'll go over the changes at the on scene meeting.");
                    $("#conversation").append(dialogue);

                });

                $.doTimeout(15000, function() {
                    $("#firstchoice").text("OK, sounds good.");
                    $("#secondchoice").text("Can't wait to get back into it.");
                });
                $.doTimeout(17000, function() {
                    $("#userinputbar").show();

                });
            }
        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Can't wait to get back into it.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'DemandsOne',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("OK Sounds good.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'DemandsOne',
            pushpop_state: 'PushState'
        }
    },
    TutorialSeven: {
        enterState: {
            init_function: function() {
                $.doTimeout(1500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Listen, I know you may not feel ready for this.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(2500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("But we need you.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(5500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I'm asking you as a last resort.'");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(8500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("But sometimes you just have to ignore the pain.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(12500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("And remember to focus on your breathing.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(15500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Anyway, I need to upgrade your linkphone software.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(18500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Give it like 15-20 minutes to update.");
                    $("#conversation").append(dialogue);
                });
                $.doTimeout(19500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Then we'll get the situation setup for you.");
                    $("#choices").before(dialogue);
                });


                $.doTimeout(18500, function() {

                    $("#firstchoice").text("OK, sounds good.");
                    $("#secondchoice").text("Can't wait to get back into it.");
                });
                $.doTimeout(20500, function() {
                    $("#userinputbar").show();

                });
            }
        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("Can't wait to get back into it.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'DemandsOne',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("OK Sounds good.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();

            },
            next_state: 'DemandsOne',
            pushpop_state: 'PushState'
        }
    },
    TutorialEight: {
        enterState: {
            init_function: function() {

                $.doTimeout(1500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Just a reminder. No one has truly recovered from what happened.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(3500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I need to upgrade your linkphone. You'd better take this time to make sure your head is in the right place.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(6500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("It's only going to make things worse for everyone if you let your self doubts cloud your judgement right now.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(9500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Give the update some time.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(10500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("By the time it's done, you'll be patched into central command.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(13500, function() {
                    $("#userinputbar").show();
                    $("#firstchoice").text("Whatever. Let's get this over with.");
                    $("#secondchoice").text("Fine.");
                });
                $.doTimeout(15500, function() {
                    $("#userinputbar").show();
                });

            }
        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I'll see you there.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'DemandsOne',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Fine.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'DemandsOne',
            pushpop_state: 'PushState'
        }
    },
    MadOne: {
        enterState: {
            init_function: function() {

                $.doTimeout(1500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Are you serious right now? All you've done for the past few months is mope around.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(3500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Listen, we all went through the same experience you did.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(5500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Yet we got back up the next day, and continued on like nothing happened.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(8500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Whether you like it or not, we need you. ");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(10500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("So you gonna step up, or stay knocked down?");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(12500, function() {

                    $("#firstchoice").text("Let's get this over with.");
                    $("#secondchoice").text("No, I'm a risk to the situation.");
                });
                $.doTimeout(14500, function() {
                    $("#userinputbar").show();

                });

            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("No, I'm a risk to the situation.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'LawyerOne',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("Let's get this over with.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'TutorialEight',
            pushpop_state: 'PushState'

        }
    },
    LawyerOne: {
        enterState: {
            init_function: function() {
                $.doTimeout(3500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Did your memory get wiped too? You think i'm just gonna let you off the hook because you're still feeling sad?");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(6500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("I could care less what some counsellor says.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(9500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("You'll be disciplined accordingly.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(10500, function() {
                    var dialogue = $("<p class='character-text'></p>").text("Enjoy the write up.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(13500, function() {

                    $("#firstchoice").text("I never liked you.");
                    $("#secondchoice").text("I'm not afraid of you.");
                });
                $.doTimeout(16500, function() {
                    $("#userinputbar").show();

                });

            }

        },
        swiperight: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-right'></p><br>").text("I'm not afraid of you.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'MadTwo',
            pushpop_state: 'PushState'

        },
        swipeleft: {
            init_function: function() {
                var dialogue = $("<p class='player-chose-left'></p><br>").text("I never liked you.");
                $("#conversation").append(dialogue);
                $("#userinputbar").hide();
            },
            next_state: 'MadTwo',
            pushpop_state: 'PushState'

        }

    },
    MadTwo: {

        enterState: {
            init_function: function() {
                $("#conversation").empty();
                $("#wrap").removeClass().addClass("discipline");
                $("#name").text("Disciplinary Review Council");
                $("#typeofcontact").text("Decision Statement");
                $.doTimeout(1500, function() {
                    var dialogue = $("<p id='pleasewait' class='w3-animate-fading w3-center'></p>").text("Please wait for disciplinary action review results.");
                    $("#conversation").append(dialogue);

                });

                $("<div class='w3-animate-fading'></div>").text("Generating Disciplinary Review. Please Wait.");
                
                $.doTimeout(1800000, function () { 
                $.doTimeout(6500, function() {
                    $("#pleasewait").remove();
                    var dialogue = $("<p></p>").text("The disciplinary review council has reached a decsion regarding the negotiator's abseenteism.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(8500, function() {
                    var dialogue = $("<p class='w3-left-align'></p>").text("The specific incident in question, led to the loss of civilian and police lives.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(10500, function() {
                    var dialogue = $("<p class='w3-left-align'></p>").text("In normal situations, we would reccomend termination.");
                    $("#conversation").append(dialogue);

                });
                $.doTimeout(12500, function() {
                    var dialogue = $("<p class='w3-left-align'></p>").text("But due to the medical condition the negotiator suffers from, and their stellar work performance over the years, we have decided to suspend the negotiator from his duties.");
                    $("#conversation").append(dialogue);

                });

                $.doTimeout(13500, function() {
                    var dialogue = $("<p class='w3-left-align'></p>").text("Pending medical approval.");
                    $("#conversation").append(dialogue);


                });
                $.doTimeout(15500, function() {
                    var dialogue = $("<a href='#index'></a>").text("Go back to menu. Or swipe in the menu below to start a new game, where you might consider negotiating a hostage situation. Or you can just get written up again. ");
                    $("#conversation").append(dialogue);


                });

                $.doTimeout(17500, function() {

                    $("#firstchoice").text("New Game.");
                    $("#secondchoice").text("New Game");
                });
                $.doTimeout(18500, function() {
                    $("#userinputbar").show();

                });
                 });
            }
        },
        swiperight: {
            next_state: 'FirstState'

        },
        swipeleft: {
            next_state: 'FirstState'

        }

    },
    //Tutorial-level section ends

    DefaultState: {
        start: {
            next_state: 'FirstState'
        }
    }


}; //end var aStateDefinition
//Dom start

$(document).ready(function() {
    $(".game").iFSM(aStateDefinition, {
        firstChoice: $("#firstchoice"),
        secondChoice: $("#secondchoice")
    });



});