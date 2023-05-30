setTimeout(function() {
    var seconds = 10; 

    setTimeout(function() {
        console.log(seconds); // 10
        seconds--; //9

        setTimeout(function() {
            console.log(seconds); //9
            seconds--; //8

            setTimeout(function() {
                console.log(seconds); //8
                seconds--; //7

                setTimeout(function() {
                    console.log(seconds); //7
                    seconds--; //6

                    setTimeout(function() {
                        console.log(seconds); //6
                        seconds--;//5

                        setTimeout(function() {
                            console.log(seconds); //5
                            seconds--; //4

                            setTimeout(function() {
                                console.log(seconds); //4
                                seconds--; //3

                                setTimeout(function() {
                                    console.log(seconds); //3
                                    seconds--; //2

                                    setTimeout(function() {
                                        console.log(seconds); //2
                                        seconds--; //0

                                    setTimeout(function() {
                                        console.log(seconds);
                                        console.log('Happy Independence Day');
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},1000);
}, 0);
