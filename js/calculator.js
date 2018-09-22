  google.charts.load('current', {'packages':['treemap']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Location',                        'Parent',                  'Market trade volume (size)', 'Market increase/decrease (color)'],
    ['Your problem:',                      null,                                50,                               0],
    ['Ordered selection',                 'Your problem:',                      50,                              -12],
    ['Unordered selection',               'Your problem:',                     30,                               10],
    ['Distinguishable objects',         'Ordered selection',                   50,                              52],
    ['Indistinguishable objects',        'Ordered selection',                  50,                              31],
    [{v:'E1', f:'n! / n1! * n2! * ... * nk!'},             'Indistinguishable objects',                      50,                              -62],
    ['Repetition allowed',         'Distinguishable objects',                  25,                              -23],
    ['Repetition not allowed',     'Distinguishable objects',                  25,                              -11],
    [{v:'E3', f:'n^r'},              'Repetition allowed',                      25,                              41],
    [{v:'E5', f:'P(n, r) = n! / (n - r)!'},          'Repetition not allowed',                      25,                              12],
    ['Distinguishable objects ',        'Unordered selection',                  25,                              4],
    ['Indistinguishable objects ',       'Unordered selection',                25,                              -5],
    ['Distinguishable classes ',     'Distinguishable objects ',               25,                              9],
    ['Indistinguishable classes ',   'Distinguishable objects ',               25,                              -39],
    ['Distinguishable classes  ',     'Indistinguishable objects ',             25,                              63],
    ['Indistinguishable classes  ',   'Indistinguishable objects ',             25,                               34],
    [{v:'E7', f:'n! / n1! * n2! * ... * nk!'},               'Distinguishable classes ',                      25,                              12],
    [{v:'E9', f:'Stirling numbers of the second kind'},             'Indistinguishable classes ',                      25,                              73],
    [{v:'E11', f:'C(n + k - 1, k - 1)'},             'Distinguishable classes  ',                      25,                              19],
    [{v:'E13', f:'Partition of the positive integer'},             'Indistinguishable classes  ',                      25,                              19],
    ]);

    tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

    var options = {
    highlightOnMouseOver: true,
    fontSize: 40,
    fontColor: '#fff',
    fontFamily: 'Lato',
    minColor: '#cd5b4c',
    midColor: '#cd5b4c',
    maxColor: '#cd5b4c',
    headerColor: '8b3327',
    headerHeight: 65,
    height: 500,
    useWeightedAverageForAggregation: true,
    generateTooltip: showTooltip
  };


function showTooltip(row, size, value) {
    switch (row){
        case 9:
            return '<div style="background:#8b3327; padding:5px; border-style:solid;">' +
                   '<span style="color: white;font-family:Courier;"><b>' + '<h3 style = "text-align: center; margin-bottom: 0.1em;">R-permutation</h3></b>' + '<br>'+ '<i>An ordered arrangement of r elements of a set with n elements.</i>' + '<br>' +'<br>'+ '<b>Example 1. </b>' + 'How many permutations of the letters ABCDEFGH contain the string ABC?' + '<br>'+ '<br>'+'<i>Solution:</i> Because the letters ABC must occur as a block, we can find the answer' +'<br>'+'by finding the number of permutations of six objects, namely, the block ABC and' +'<br>'+' the individual letters D, E, F, G, and H. Because these six objects can occur ' +'<br>'+'in any order, there are P(6, 6) = 6! = 720 permutations of the letters ABCDEFGH' +'<br>'+' in which ABC occurs as a block.'+'<br>'+ '<br>'+'<b>Example 2. </b>' + 'How many ways are there to select a first-prize winner, a second-prize' +'<br>'+' winner, and a third-prize winner from 100 different people who have entered a contest?' + '<br>'+ '<br>'+'<i>Solution:</i> Because it matters which person wins which prize, the number of ways to pick' +'<br>'+' the three prize winners is the number of ordered selections of three elements from a set' +'<br>'+' of 100 elements, that is, the number of 3-permutations of a set of 100 elements.' +'<br>'+' Consequently, the answer is P (100, 3) = 100 * 99 * 98 = 970,200.' +'</p></div>';
            break;
        case 8:
           return '<div style="background:#8b3327; padding:5px; border-style:solid;">' +
                   '<span style="color: white;font-family:Courier"><b>' + '<h3 style = "text-align: center; margin-bottom: 0.1em;">R-permutation with repetition</h3></b>' + '<br>'+ '<i>An ordered arrangement of r elements of a set with n elements when repetition is allowed.</i>' + '<br>' +'<br>'+ '<b>Proof:</b> There are n ways to select an element of the set for each of the r positions in ' + '<br>' +'the r-permutation when repetition is allowed, because for each choice all n objects are available.' +'<br>'+'Hence, by the product rule there are n^r r-permutations when repetition is allowed.'+'<br>'+ '<br>'+'<b>Example. </b>' + 'How many strings of length r can be formed from the uppercase letters of the English alphabet?' + '<br>'+ '<br>'+'<i>Solution:</i> : By the product rule, because there are 26 uppercase English letters, and because each letter'+'<br>'+ ' can be used repeatedly, we see that there are 26^r strings of uppercase English letters of length r.'+'<br>'+ '<br>' +'</div>';
            break;
       case 5:
            return '<div style="background:#8b3327; padding:5px; border-style:solid;">' +
                   '<span style="color: white;font-family:Courier"><b>' + '<h3 style = "text-align: center; margin-bottom: 0.1em;">Permutations with indistinguishable objects</h3></b>' + '<br>'+ '<i>Permutations of n objects, where there are n1 indistinguishable objects of type 1, ' +'<br>'+ 'n2 indistinguishable objects of type 2,..., and nk indistinguishable objects of type k.</i>' + '<br>' +'<br>'+ '<b>Example:</b> How many different strings can be made from the letters in SUCCESS, using all the letters?' + '<br>'+ '<br>'+ '<i>Solution 1: </i>This word contains three Ss, two Cs, one U, and one E. To determine the number ' +'<br>'+ 'of different strings that can be made by reordering the letters, first note' +'<br>'+ ' that the three Ss can be placed among the seven positions' +'<br>'+ ' in C(7, 3) different ways, leaving four positions free. Then the two Cs ' +'<br>'+ 'can be placed in C(4, 2) ways, leaving two free positions. The U can be placed' +'<br>'+ ' in C(2, 1) ways, leaving just one position free. Hence E can be placed' +'<br>'+ ' in C(1, 1) way. Consequently, from the product rule, the number of different strings ' +'<br>'+ 'that can be made is C(7, 3)C(4, 2)C(2, 1)C(1, 1) = 7!/3! * 2! * 1! * 1! = 420.' +'</div>';
            break;
        case 16:
            return '<div style="background:#8b3327; padding:5px; border-style:solid;">' +
                   '<span style="color: white;font-family:Courier"><b>' + '<h3 style = "text-align: center; margin-bottom: 0.1em;">Distinguishable objects and distinguishable boxes</h3></b>' + '<br>'+ '<i>The number of ways to distribute n distinguishable objects into k distinguishable boxes'+ '<br>'+' so that ni objects are placed into box i, i = 1, 2,... , k.</i>' + '<br>' +'<br>'+ '<b>Example 1. </b>' + 'How many ways are there to distribute hands of 5 cards to each of four players'+ '<br>'+' from the standard deck of 52 cards?' + '<br>'+ '<br>'+'<i>Solution:</i> The first player can be dealt 5 cards in C(52, 5) ways. The second player '+ '<br>'+'can be dealt 5 cards in C(47, 5) ways, because only 47 cards are left.'+ '<br>'+' The third player can be dealt 5 cards in C(42, 5) ways. Finally, the fourth'+ '<br>'+' player can be dealt 5 cards in C(37, 5) ways. Hence, the total number of ways to deal four '+ '<br>'+'players 5 cards each is C(52, 5)C(47, 5)C(42, 5)C(37, 5) = 52! / 5! * 5! * 5! * 5! * 32!.'+'<br>'+ '<br>'+'<b>Example 2. </b>' + 'Ten children are to be divided into an A team and a B team of 4 people first'+ '<br>'+' and 6 second. The A team will play in one league and the B team in another. How many '+ '<br>'+'different divisions are possible?' + '<br>'+ '<br>'+'<i>Solution:</i> There are 10!/4! * 6! = 210 possible divisions.' +'</div>';
            break;
        case 18:
            return '<div style="background:#8b3327; padding:5px; border-style:solid;">' +
                   '<span style="color: white;font-family:Courier"><b>' + '<h3 style = "text-align: center; margin-bottom: 0.1em;">Indistinguishable objects and distinguishable boxes</h3></b>' + '<br>'+ '<i>The number of ways to distribute n distinguishable objects into k distinguishable boxes'+ '<br>'+' so that ni objects are placed into box i, i = 1, 2,... , k.</i>' + '<br>' +'<br>'+ '<b>Example 1. </b>' + 'How many ways are there to place 10 indistinguishable balls into eight distinguishable bins?' + '<br>'+ '<br>'+'<i>Solution:</i> The number of ways to place 10 indistinguishable balls into eight bins' + '<br>'+ ' equals the number of 10-combinations from a set with eight elements when repetition' + '<br>'+ ' is allowed. Consequently, there are C(8 + 10 - 1, 10) = C(17, 10) = 19,448.'+'<br>'+ '<br>'+'<b>Example 2. </b>' + 'How many distinct nonnegative integer-valued solutions of x1 + x2 = 3 are possible?' + '<br>'+ '<br>'+'<i>Solution:</i> There are  C(3 + 2 - 1,  2 - 1) = C(4, 1) = 4 such solutions:'+'<br>'+ ' (0, 3), (1, 2), (2, 1), (3, 0).' +'</div>';
            break;
        case 17:
            return '<div style="background:#8b3327; padding:5px; border-style:solid;">' +
                   '<span style="color: white;font-family:Courier"><b>' + '<h3 style = "text-align: center; margin-bottom: 0.1em;">Distinguishable objects and indistinguishable boxes</h3></b>' + '<br>' +'<br>'+ '<b>Example. </b>' + 'How many ways are there to put four different employees into three indistinguishable' + '<br>'+ 'offices, when each office can contain any number of employees?' + '<br>'+ '<br>'+'<i>Solution 1: </i>There are six ways to put four different employees into three ' + '<br>'+ 'indistinguishable offices so that no office is empty, seven ways to put' + '<br>'+ ' four different employees into two indistinguishable offices so that no office is empty, and one ' + '<br>'+ 'way to put four employees into one office so that it is not empty. ' + '<br>'+ '7 + 6 + 1 = 14.'+'<br>'+ '<br>'+'<i>Solution 2:</i> There is no simple closed formula for the number of ways to distribute n' + '<br>'+ ' distinguishable objects into j indistinguishable boxes. However, there is a formula involving ' + '<br>'+ 'a summation, which we will now describe. Let S(n, j) denote the number of ways ' + '<br>'+ 'to distribute n distinguishable objects into j indistinguishable boxes ' + '<br>'+ 'so that no box is empty. The numbers S(n, j) are called Stirling numbers' + '<br>'+ ' of the second kind. So, the number of ways to distribute four distinguishable objects ' + '<br>'+ ' into three indistinguishable boxes equals S(4, 1) + S(4, 2) + S(4, 3) = 1 + 7 + 6 = 14.' +'</div>';
            break;
       case 19:
            return '<div style="background:#8b3327; padding:5px; border-style:solid;">' +
                   '<span style="color: white;font-family:Courier"><b>' + '<h3 style = "text-align: center; margin-bottom: 0.1em;">Indistinguishable objects and indistinguishable boxes</h3></b>' + '<br>'+ '<br>' + '<b>Example. </b>' + 'How many ways are there to pack six copies of the same book into four ' + '<br>'+ 'identical boxes, where a box can contain as many as six books?' + '<br>'+ '<br>'+'<i>Solution: </i>Distributing n indistinguishable objects into k indistinguishable ' + '<br>'+ 'boxes is the same as writing n as the sum of at most k positive integers in ' + '<br>'+ 'nonincreasing order. If a1 + a2 + aj = n, where a1, a2,...,aj are positive ' + '<br>'+ 'integers with a1 >= a2 >= ... >= aj , we say that a1, a2,...,aj is a partition ' + '<br>'+ 'of the positive integer n into j positive integers. We see that if pk(n) ' + '<br>'+ 'is the number of partitions of n into at most k positive integers,' + '<br>'+ ' then there are pk(n) ways to distribute n indistinguishable' + '<br>'+ ' objects into k indistinguishable boxes. In this example p4(6) = 9.' + '<br>'+ ' No simple closed formula exists for this number. ' +'</div>';
            break;
        default:
            return ''

    }
  }

    tree.draw(data,options);


  }
