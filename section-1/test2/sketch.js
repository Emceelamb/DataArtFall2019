let treedata;

function setup(){
    createCanvas(900,400);
    background(200);
    loadJSON('data/HemlockData.json', callback);    
}

function draw(){
    background(230);
    drawViz();
    drawMarkers();
}

function callback(data) {
    console.log('done loading data');
    // console.log(data);
//    treedata = data;

    if(treedata){
        for(let i = 0 ; i<treedata.length; i ++){
            // console.log(treedata[i]);
            let year= treedata[i].year;
            let rawRingWidth = treedata[i]['RawRingWidth_mm'];
            let growthIndex = treedata[i].GrowthIndex;
            // console.log(year, rawRingWidth, growthIndex);
        }
    }
    drawViz();
    //drawMarkers();
}

function drawViz(){
    text("Growth Index", 25, 50);
    text("Raw Ring Width mm", 25, 300);
    push();
    translate(20,0);
    for(let i = 0; i < treedata.length; i++){
        let ringW = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, 0,100);
        let growIndex = map(treedata[i]['GrowthIndex'], 0, 2, 0, 100);
        push();
        translate(i*2, height/2);
        stroke(0,130);
        noFill();
        line(0,0,0, growIndex);
        pop();
    }
    for(let i = 0; i < treedata.length; i++){
        let ringW = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, 0,100);
        push();
        translate(i*2, height/2-101);
        stroke(0,30);
        noFill();
        line(0,100,0, 100-ringW);
        pop();
    }
    pop();
}

function drawMarkers(){
    for (let i=0;i<treedata.length; i++){
       push();
        stroke(0);
       line(0, 0, 0, height); 
       pop();
    }
    text('1579', 0,200);
    text('2000', width-40, 200);
}

treedata = [
    {
        "year": "1579",
        "RawRingWidth_mm": "0.375",
        "GrowthIndex": "0.88"
    },
    {
        "year": "1580",
        "RawRingWidth_mm": "0.21",
        "GrowthIndex": "0.731"
    },
    {
        "year": "1581",
        "RawRingWidth_mm": "0.386",
        "GrowthIndex": "0.849"
    },
    {
        "year": "1582",
        "RawRingWidth_mm": "0.285",
        "GrowthIndex": "0.748"
    },
    {
        "year": "1583",
        "RawRingWidth_mm": "0.142",
        "GrowthIndex": "0.628"
    },
    {
        "year": "1584",
        "RawRingWidth_mm": "0.291",
        "GrowthIndex": "0.718"
    },
    {
        "year": "1585",
        "RawRingWidth_mm": "0.707",
        "GrowthIndex": "1.015"
    },
    {
        "year": "1586",
        "RawRingWidth_mm": "0.456",
        "GrowthIndex": "0.81"
    },
    {
        "year": "1587",
        "RawRingWidth_mm": "0.056",
        "GrowthIndex": "0.498"
    },
    {
        "year": "1588",
        "RawRingWidth_mm": "0.314",
        "GrowthIndex": "0.677"
    },
    {
        "year": "1589",
        "RawRingWidth_mm": "0.319",
        "GrowthIndex": "0.656"
    },
    {
        "year": "1590",
        "RawRingWidth_mm": "0.403",
        "GrowthIndex": "0.719"
    },
    {
        "year": "1591",
        "RawRingWidth_mm": "0.518",
        "GrowthIndex": "0.783"
    },
    {
        "year": "1592",
        "RawRingWidth_mm": "0.446",
        "GrowthIndex": "0.717"
    },
    {
        "year": "1593",
        "RawRingWidth_mm": "0.481",
        "GrowthIndex": "0.734"
    },
    {
        "year": "1594",
        "RawRingWidth_mm": "0.644",
        "GrowthIndex": "0.843"
    },
    {
        "year": "1595",
        "RawRingWidth_mm": "0.516",
        "GrowthIndex": "0.733"
    },
    {
        "year": "1596",
        "RawRingWidth_mm": "0.797",
        "GrowthIndex": "0.944"
    },
    {
        "year": "1597",
        "RawRingWidth_mm": "0.463",
        "GrowthIndex": "0.667"
    },
    {
        "year": "1598",
        "RawRingWidth_mm": "0.662",
        "GrowthIndex": "0.829"
    },
    {
        "year": "1599",
        "RawRingWidth_mm": "0.571",
        "GrowthIndex": "0.727"
    },
    {
        "year": "1600",
        "RawRingWidth_mm": "0.467",
        "GrowthIndex": "0.653"
    },
    {
        "year": "1601",
        "RawRingWidth_mm": "1.024",
        "GrowthIndex": "1.062"
    },
    {
        "year": "1602",
        "RawRingWidth_mm": "1.185",
        "GrowthIndex": "1.163"
    },
    {
        "year": "1603",
        "RawRingWidth_mm": "0.858",
        "GrowthIndex": "0.93"
    },
    {
        "year": "1604",
        "RawRingWidth_mm": "0.591",
        "GrowthIndex": "0.721"
    },
    {
        "year": "1605",
        "RawRingWidth_mm": "0.46",
        "GrowthIndex": "0.607"
    },
    {
        "year": "1606",
        "RawRingWidth_mm": "0.498",
        "GrowthIndex": "0.628"
    },
    {
        "year": "1607",
        "RawRingWidth_mm": "0.677",
        "GrowthIndex": "0.754"
    },
    {
        "year": "1608",
        "RawRingWidth_mm": "0.703",
        "GrowthIndex": "0.762"
    },
    {
        "year": "1609",
        "RawRingWidth_mm": "0.94",
        "GrowthIndex": "0.938"
    },
    {
        "year": "1610",
        "RawRingWidth_mm": "1.05",
        "GrowthIndex": "1.008"
    },
    {
        "year": "1611",
        "RawRingWidth_mm": "1.13",
        "GrowthIndex": "1.069"
    },
    {
        "year": "1612",
        "RawRingWidth_mm": "1.232",
        "GrowthIndex": "1.137"
    },
    {
        "year": "1613",
        "RawRingWidth_mm": "0.922",
        "GrowthIndex": "0.906"
    },
    {
        "year": "1614",
        "RawRingWidth_mm": "0.912",
        "GrowthIndex": "0.901"
    },
    {
        "year": "1615",
        "RawRingWidth_mm": "0.686",
        "GrowthIndex": "0.831"
    },
    {
        "year": "1616",
        "RawRingWidth_mm": "0.695",
        "GrowthIndex": "0.832"
    },
    {
        "year": "1617",
        "RawRingWidth_mm": "0.502",
        "GrowthIndex": "0.618"
    },
    {
        "year": "1618",
        "RawRingWidth_mm": "0.629",
        "GrowthIndex": "0.743"
    },
    {
        "year": "1619",
        "RawRingWidth_mm": "0.607",
        "GrowthIndex": "0.692"
    },
    {
        "year": "1620",
        "RawRingWidth_mm": "0.506",
        "GrowthIndex": "0.606"
    },
    {
        "year": "1621",
        "RawRingWidth_mm": "0.752",
        "GrowthIndex": "0.857"
    },
    {
        "year": "1622",
        "RawRingWidth_mm": "0.605",
        "GrowthIndex": "0.7"
    },
    {
        "year": "1623",
        "RawRingWidth_mm": "0.527",
        "GrowthIndex": "0.613"
    },
    {
        "year": "1624",
        "RawRingWidth_mm": "0.418",
        "GrowthIndex": "0.481"
    },
    {
        "year": "1625",
        "RawRingWidth_mm": "0.525",
        "GrowthIndex": "0.6"
    },
    {
        "year": "1626",
        "RawRingWidth_mm": "0.449",
        "GrowthIndex": "0.493"
    },
    {
        "year": "1627",
        "RawRingWidth_mm": "0.473",
        "GrowthIndex": "0.518"
    },
    {
        "year": "1628",
        "RawRingWidth_mm": "0.53",
        "GrowthIndex": "0.567"
    },
    {
        "year": "1629",
        "RawRingWidth_mm": "0.477",
        "GrowthIndex": "0.497"
    },
    {
        "year": "1630",
        "RawRingWidth_mm": "0.803",
        "GrowthIndex": "0.823"
    },
    {
        "year": "1631",
        "RawRingWidth_mm": "0.641",
        "GrowthIndex": "0.659"
    },
    {
        "year": "1632",
        "RawRingWidth_mm": "0.314",
        "GrowthIndex": "0.323"
    },
    {
        "year": "1633",
        "RawRingWidth_mm": "0.417",
        "GrowthIndex": "0.41"
    },
    {
        "year": "1634",
        "RawRingWidth_mm": "0.704",
        "GrowthIndex": "0.719"
    },
    {
        "year": "1635",
        "RawRingWidth_mm": "0.423",
        "GrowthIndex": "0.416"
    },
    {
        "year": "1636",
        "RawRingWidth_mm": "0.499",
        "GrowthIndex": "0.49"
    },
    {
        "year": "1637",
        "RawRingWidth_mm": "0.649",
        "GrowthIndex": "0.626"
    },
    {
        "year": "1638",
        "RawRingWidth_mm": "0.636",
        "GrowthIndex": "0.608"
    },
    {
        "year": "1639",
        "RawRingWidth_mm": "0.739",
        "GrowthIndex": "0.714"
    },
    {
        "year": "1640",
        "RawRingWidth_mm": "0.611",
        "GrowthIndex": "0.58"
    },
    {
        "year": "1641",
        "RawRingWidth_mm": "0.66",
        "GrowthIndex": "0.629"
    },
    {
        "year": "1642",
        "RawRingWidth_mm": "0.723",
        "GrowthIndex": "0.685"
    },
    {
        "year": "1643",
        "RawRingWidth_mm": "0.564",
        "GrowthIndex": "0.514"
    },
    {
        "year": "1644",
        "RawRingWidth_mm": "0.552",
        "GrowthIndex": "0.501"
    },
    {
        "year": "1645",
        "RawRingWidth_mm": "0.345",
        "GrowthIndex": "0.281"
    },
    {
        "year": "1646",
        "RawRingWidth_mm": "0.339",
        "GrowthIndex": "0.268"
    },
    {
        "year": "1647",
        "RawRingWidth_mm": "0.408",
        "GrowthIndex": "0.345"
    },
    {
        "year": "1648",
        "RawRingWidth_mm": "0.398",
        "GrowthIndex": "0.343"
    },
    {
        "year": "1649",
        "RawRingWidth_mm": "0.307",
        "GrowthIndex": "0.219"
    },
    {
        "year": "1650",
        "RawRingWidth_mm": "0.314",
        "GrowthIndex": "0.203"
    },
    {
        "year": "1651",
        "RawRingWidth_mm": "0.518",
        "GrowthIndex": "0.449"
    },
    {
        "year": "1652",
        "RawRingWidth_mm": "0.517",
        "GrowthIndex": "0.446"
    },
    {
        "year": "1653",
        "RawRingWidth_mm": "0.513",
        "GrowthIndex": "0.456"
    },
    {
        "year": "1654",
        "RawRingWidth_mm": "0.637",
        "GrowthIndex": "0.595"
    },
    {
        "year": "1655",
        "RawRingWidth_mm": "0.917",
        "GrowthIndex": "0.893"
    },
    {
        "year": "1656",
        "RawRingWidth_mm": "1.108",
        "GrowthIndex": "1.066"
    },
    {
        "year": "1657",
        "RawRingWidth_mm": "1.082",
        "GrowthIndex": "1.043"
    },
    {
        "year": "1658",
        "RawRingWidth_mm": "1.061",
        "GrowthIndex": "1.036"
    },
    {
        "year": "1659",
        "RawRingWidth_mm": "1.06",
        "GrowthIndex": "1.035"
    },
    {
        "year": "1660",
        "RawRingWidth_mm": "0.982",
        "GrowthIndex": "0.951"
    },
    {
        "year": "1661",
        "RawRingWidth_mm": "0.959",
        "GrowthIndex": "0.944"
    },
    {
        "year": "1662",
        "RawRingWidth_mm": "0.798",
        "GrowthIndex": "0.781"
    },
    {
        "year": "1663",
        "RawRingWidth_mm": "0.59",
        "GrowthIndex": "0.57"
    },
    {
        "year": "1664",
        "RawRingWidth_mm": "0.722",
        "GrowthIndex": "0.701"
    },
    {
        "year": "1665",
        "RawRingWidth_mm": "0.646",
        "GrowthIndex": "0.609"
    },
    {
        "year": "1666",
        "RawRingWidth_mm": "0.668",
        "GrowthIndex": "0.616"
    },
    {
        "year": "1667",
        "RawRingWidth_mm": "0.733",
        "GrowthIndex": "0.66"
    },
    {
        "year": "1668",
        "RawRingWidth_mm": "0.823",
        "GrowthIndex": "0.753"
    },
    {
        "year": "1669",
        "RawRingWidth_mm": "0.86",
        "GrowthIndex": "0.772"
    },
    {
        "year": "1670",
        "RawRingWidth_mm": "0.807",
        "GrowthIndex": "0.706"
    },
    {
        "year": "1671",
        "RawRingWidth_mm": "0.854",
        "GrowthIndex": "0.756"
    },
    {
        "year": "1672",
        "RawRingWidth_mm": "0.925",
        "GrowthIndex": "0.846"
    },
    {
        "year": "1673",
        "RawRingWidth_mm": "1.085",
        "GrowthIndex": "1.004"
    },
    {
        "year": "1674",
        "RawRingWidth_mm": "1.125",
        "GrowthIndex": "1.05"
    },
    {
        "year": "1675",
        "RawRingWidth_mm": "0.934",
        "GrowthIndex": "0.872"
    },
    {
        "year": "1676",
        "RawRingWidth_mm": "0.971",
        "GrowthIndex": "0.903"
    },
    {
        "year": "1677",
        "RawRingWidth_mm": "1.154",
        "GrowthIndex": "1.091"
    },
    {
        "year": "1678",
        "RawRingWidth_mm": "1.162",
        "GrowthIndex": "1.112"
    },
    {
        "year": "1679",
        "RawRingWidth_mm": "0.976",
        "GrowthIndex": "0.936"
    },
    {
        "year": "1680",
        "RawRingWidth_mm": "1.053",
        "GrowthIndex": "1.01"
    },
    {
        "year": "1681",
        "RawRingWidth_mm": "0.991",
        "GrowthIndex": "0.954"
    },
    {
        "year": "1682",
        "RawRingWidth_mm": "1.03",
        "GrowthIndex": "0.996"
    },
    {
        "year": "1683",
        "RawRingWidth_mm": "0.887",
        "GrowthIndex": "0.843"
    },
    {
        "year": "1684",
        "RawRingWidth_mm": "1.093",
        "GrowthIndex": "1.048"
    },
    {
        "year": "1685",
        "RawRingWidth_mm": "0.989",
        "GrowthIndex": "0.933"
    },
    {
        "year": "1686",
        "RawRingWidth_mm": "1.007",
        "GrowthIndex": "0.944"
    },
    {
        "year": "1687",
        "RawRingWidth_mm": "1.032",
        "GrowthIndex": "0.955"
    },
    {
        "year": "1688",
        "RawRingWidth_mm": "1.196",
        "GrowthIndex": "1.126"
    },
    {
        "year": "1689",
        "RawRingWidth_mm": "1.322",
        "GrowthIndex": "1.252"
    },
    {
        "year": "1690",
        "RawRingWidth_mm": "1.417",
        "GrowthIndex": "1.345"
    },
    {
        "year": "1691",
        "RawRingWidth_mm": "1.406",
        "GrowthIndex": "1.351"
    },
    {
        "year": "1692",
        "RawRingWidth_mm": "1.676",
        "GrowthIndex": "1.604"
    },
    {
        "year": "1693",
        "RawRingWidth_mm": "1.779",
        "GrowthIndex": "1.711"
    },
    {
        "year": "1694",
        "RawRingWidth_mm": "1.749",
        "GrowthIndex": "1.679"
    },
    {
        "year": "1695",
        "RawRingWidth_mm": "1.962",
        "GrowthIndex": "1.866"
    },
    {
        "year": "1696",
        "RawRingWidth_mm": "1.816",
        "GrowthIndex": "1.721"
    },
    {
        "year": "1697",
        "RawRingWidth_mm": "1.632",
        "GrowthIndex": "1.561"
    },
    {
        "year": "1698",
        "RawRingWidth_mm": "1.477",
        "GrowthIndex": "1.418"
    },
    {
        "year": "1699",
        "RawRingWidth_mm": "1.373",
        "GrowthIndex": "1.324"
    },
    {
        "year": "1700",
        "RawRingWidth_mm": "1.36",
        "GrowthIndex": "1.291"
    },
    {
        "year": "1701",
        "RawRingWidth_mm": "1.378",
        "GrowthIndex": "1.301"
    },
    {
        "year": "1702",
        "RawRingWidth_mm": "1.44",
        "GrowthIndex": "1.378"
    },
    {
        "year": "1703",
        "RawRingWidth_mm": "1.575",
        "GrowthIndex": "1.521"
    },
    {
        "year": "1704",
        "RawRingWidth_mm": "1.332",
        "GrowthIndex": "1.306"
    },
    {
        "year": "1705",
        "RawRingWidth_mm": "1.492",
        "GrowthIndex": "1.457"
    },
    {
        "year": "1706",
        "RawRingWidth_mm": "1.857",
        "GrowthIndex": "1.814"
    },
    {
        "year": "1707",
        "RawRingWidth_mm": "1.619",
        "GrowthIndex": "1.605"
    },
    {
        "year": "1708",
        "RawRingWidth_mm": "1.556",
        "GrowthIndex": "1.551"
    },
    {
        "year": "1709",
        "RawRingWidth_mm": "1.547",
        "GrowthIndex": "1.534"
    },
    {
        "year": "1710",
        "RawRingWidth_mm": "1.544",
        "GrowthIndex": "1.515"
    },
    {
        "year": "1711",
        "RawRingWidth_mm": "1.579",
        "GrowthIndex": "1.553"
    },
    {
        "year": "1712",
        "RawRingWidth_mm": "1.67",
        "GrowthIndex": "1.628"
    },
    {
        "year": "1713",
        "RawRingWidth_mm": "1.916",
        "GrowthIndex": "1.862"
    },
    {
        "year": "1714",
        "RawRingWidth_mm": "1.796",
        "GrowthIndex": "1.773"
    },
    {
        "year": "1715",
        "RawRingWidth_mm": "1.793",
        "GrowthIndex": "1.77"
    },
    {
        "year": "1716",
        "RawRingWidth_mm": "1.806",
        "GrowthIndex": "1.778"
    },
    {
        "year": "1717",
        "RawRingWidth_mm": "2.006",
        "GrowthIndex": "1.958"
    },
    {
        "year": "1718",
        "RawRingWidth_mm": "2.078",
        "GrowthIndex": "2.014"
    },
    {
        "year": "1719",
        "RawRingWidth_mm": "2.13",
        "GrowthIndex": "2.031"
    },
    {
        "year": "1720",
        "RawRingWidth_mm": "1.673",
        "GrowthIndex": "1.641"
    },
    {
        "year": "1721",
        "RawRingWidth_mm": "1.949",
        "GrowthIndex": "1.889"
    },
    {
        "year": "1722",
        "RawRingWidth_mm": "1.734",
        "GrowthIndex": "1.66"
    },
    {
        "year": "1723",
        "RawRingWidth_mm": "1.68",
        "GrowthIndex": "1.636"
    },
    {
        "year": "1724",
        "RawRingWidth_mm": "1.891",
        "GrowthIndex": "1.803"
    },
    {
        "year": "1725",
        "RawRingWidth_mm": "2.068",
        "GrowthIndex": "1.969"
    },
    {
        "year": "1726",
        "RawRingWidth_mm": "1.961",
        "GrowthIndex": "1.896"
    },
    {
        "year": "1727",
        "RawRingWidth_mm": "1.789",
        "GrowthIndex": "1.745"
    },
    {
        "year": "1728",
        "RawRingWidth_mm": "1.759",
        "GrowthIndex": "1.707"
    },
    {
        "year": "1729",
        "RawRingWidth_mm": "1.554",
        "GrowthIndex": "1.537"
    },
    {
        "year": "1730",
        "RawRingWidth_mm": "1.546",
        "GrowthIndex": "1.529"
    },
    {
        "year": "1731",
        "RawRingWidth_mm": "1.523",
        "GrowthIndex": "1.515"
    },
    {
        "year": "1732",
        "RawRingWidth_mm": "1.577",
        "GrowthIndex": "1.563"
    },
    {
        "year": "1733",
        "RawRingWidth_mm": "1.536",
        "GrowthIndex": "1.516"
    },
    {
        "year": "1734",
        "RawRingWidth_mm": "1.627",
        "GrowthIndex": "1.588"
    },
    {
        "year": "1735",
        "RawRingWidth_mm": "1.599",
        "GrowthIndex": "1.557"
    },
    {
        "year": "1736",
        "RawRingWidth_mm": "1.581",
        "GrowthIndex": "1.557"
    },
    {
        "year": "1737",
        "RawRingWidth_mm": "1.547",
        "GrowthIndex": "1.514"
    },
    {
        "year": "1738",
        "RawRingWidth_mm": "1.452",
        "GrowthIndex": "1.422"
    },
    {
        "year": "1739",
        "RawRingWidth_mm": "1.485",
        "GrowthIndex": "1.449"
    },
    {
        "year": "1740",
        "RawRingWidth_mm": "1.706",
        "GrowthIndex": "1.65"
    },
    {
        "year": "1741",
        "RawRingWidth_mm": "1.57",
        "GrowthIndex": "1.532"
    },
    {
        "year": "1742",
        "RawRingWidth_mm": "1.645",
        "GrowthIndex": "1.607"
    },
    {
        "year": "1743",
        "RawRingWidth_mm": "1.657",
        "GrowthIndex": "1.634"
    },
    {
        "year": "1744",
        "RawRingWidth_mm": "1.541",
        "GrowthIndex": "1.538"
    },
    {
        "year": "1745",
        "RawRingWidth_mm": "1.617",
        "GrowthIndex": "1.604"
    },
    {
        "year": "1746",
        "RawRingWidth_mm": "1.701",
        "GrowthIndex": "1.69"
    },
    {
        "year": "1747",
        "RawRingWidth_mm": "1.539",
        "GrowthIndex": "1.535"
    },
    {
        "year": "1748",
        "RawRingWidth_mm": "1.619",
        "GrowthIndex": "1.601"
    },
    {
        "year": "1749",
        "RawRingWidth_mm": "1.516",
        "GrowthIndex": "1.498"
    },
    {
        "year": "1750",
        "RawRingWidth_mm": "1.637",
        "GrowthIndex": "1.614"
    },
    {
        "year": "1751",
        "RawRingWidth_mm": "1.59",
        "GrowthIndex": "1.562"
    },
    {
        "year": "1752",
        "RawRingWidth_mm": "1.719",
        "GrowthIndex": "1.669"
    },
    {
        "year": "1753",
        "RawRingWidth_mm": "1.686",
        "GrowthIndex": "1.659"
    },
    {
        "year": "1754",
        "RawRingWidth_mm": "1.664",
        "GrowthIndex": "1.636"
    },
    {
        "year": "1755",
        "RawRingWidth_mm": "1.598",
        "GrowthIndex": "1.571"
    },
    {
        "year": "1756",
        "RawRingWidth_mm": "1.652",
        "GrowthIndex": "1.622"
    },
    {
        "year": "1757",
        "RawRingWidth_mm": "1.771",
        "GrowthIndex": "1.719"
    },
    {
        "year": "1758",
        "RawRingWidth_mm": "1.632",
        "GrowthIndex": "1.598"
    },
    {
        "year": "1759",
        "RawRingWidth_mm": "1.695",
        "GrowthIndex": "1.666"
    },
    {
        "year": "1760",
        "RawRingWidth_mm": "1.525",
        "GrowthIndex": "1.512"
    },
    {
        "year": "1761",
        "RawRingWidth_mm": "1.502",
        "GrowthIndex": "1.488"
    },
    {
        "year": "1762",
        "RawRingWidth_mm": "1.397",
        "GrowthIndex": "1.389"
    },
    {
        "year": "1763",
        "RawRingWidth_mm": "1.401",
        "GrowthIndex": "1.387"
    },
    {
        "year": "1764",
        "RawRingWidth_mm": "1.51",
        "GrowthIndex": "1.481"
    },
    {
        "year": "1765",
        "RawRingWidth_mm": "1.31",
        "GrowthIndex": "1.295"
    },
    {
        "year": "1766",
        "RawRingWidth_mm": "1.261",
        "GrowthIndex": "1.25"
    },
    {
        "year": "1767",
        "RawRingWidth_mm": "1.236",
        "GrowthIndex": "1.212"
    },
    {
        "year": "1768",
        "RawRingWidth_mm": "1.219",
        "GrowthIndex": "1.182"
    },
    {
        "year": "1769",
        "RawRingWidth_mm": "1.412",
        "GrowthIndex": "1.342"
    },
    {
        "year": "1770",
        "RawRingWidth_mm": "1.217",
        "GrowthIndex": "1.157"
    },
    {
        "year": "1771",
        "RawRingWidth_mm": "1.516",
        "GrowthIndex": "1.452"
    },
    {
        "year": "1772",
        "RawRingWidth_mm": "1.355",
        "GrowthIndex": "1.3"
    },
    {
        "year": "1773",
        "RawRingWidth_mm": "1.355",
        "GrowthIndex": "1.307"
    },
    {
        "year": "1774",
        "RawRingWidth_mm": "1.267",
        "GrowthIndex": "1.22"
    },
    {
        "year": "1775",
        "RawRingWidth_mm": "1.404",
        "GrowthIndex": "1.35"
    },
    {
        "year": "1776",
        "RawRingWidth_mm": "1.556",
        "GrowthIndex": "1.491"
    },
    {
        "year": "1777",
        "RawRingWidth_mm": "1.571",
        "GrowthIndex": "1.511"
    },
    {
        "year": "1778",
        "RawRingWidth_mm": "1.517",
        "GrowthIndex": "1.431"
    },
    {
        "year": "1779",
        "RawRingWidth_mm": "1.359",
        "GrowthIndex": "1.313"
    },
    {
        "year": "1780",
        "RawRingWidth_mm": "1.318",
        "GrowthIndex": "1.279"
    },
    {
        "year": "1781",
        "RawRingWidth_mm": "1.433",
        "GrowthIndex": "1.382"
    },
    {
        "year": "1782",
        "RawRingWidth_mm": "1.49",
        "GrowthIndex": "1.44"
    },
    {
        "year": "1783",
        "RawRingWidth_mm": "1.393",
        "GrowthIndex": "1.353"
    },
    {
        "year": "1784",
        "RawRingWidth_mm": "1.189",
        "GrowthIndex": "1.141"
    },
    {
        "year": "1785",
        "RawRingWidth_mm": "1.318",
        "GrowthIndex": "1.297"
    },
    {
        "year": "1786",
        "RawRingWidth_mm": "1.197",
        "GrowthIndex": "1.163"
    },
    {
        "year": "1787",
        "RawRingWidth_mm": "1.197",
        "GrowthIndex": "1.137"
    },
    {
        "year": "1788",
        "RawRingWidth_mm": "1.313",
        "GrowthIndex": "1.235"
    },
    {
        "year": "1789",
        "RawRingWidth_mm": "1.577",
        "GrowthIndex": "1.469"
    },
    {
        "year": "1790",
        "RawRingWidth_mm": "1.399",
        "GrowthIndex": "1.323"
    },
    {
        "year": "1791",
        "RawRingWidth_mm": "1.191",
        "GrowthIndex": "1.149"
    },
    {
        "year": "1792",
        "RawRingWidth_mm": "0.981",
        "GrowthIndex": "0.96"
    },
    {
        "year": "1793",
        "RawRingWidth_mm": "1.033",
        "GrowthIndex": "1.024"
    },
    {
        "year": "1794",
        "RawRingWidth_mm": "1.07",
        "GrowthIndex": "1.053"
    },
    {
        "year": "1795",
        "RawRingWidth_mm": "1.104",
        "GrowthIndex": "1.082"
    },
    {
        "year": "1796",
        "RawRingWidth_mm": "1.13",
        "GrowthIndex": "1.126"
    },
    {
        "year": "1797",
        "RawRingWidth_mm": "1",
        "GrowthIndex": "0.966"
    },
    {
        "year": "1798",
        "RawRingWidth_mm": "0.92",
        "GrowthIndex": "0.874"
    },
    {
        "year": "1799",
        "RawRingWidth_mm": "0.875",
        "GrowthIndex": "0.824"
    },
    {
        "year": "1800",
        "RawRingWidth_mm": "0.804",
        "GrowthIndex": "0.76"
    },
    {
        "year": "1801",
        "RawRingWidth_mm": "0.952",
        "GrowthIndex": "0.896"
    },
    {
        "year": "1802",
        "RawRingWidth_mm": "1.169",
        "GrowthIndex": "1.083"
    },
    {
        "year": "1803",
        "RawRingWidth_mm": "1.094",
        "GrowthIndex": "0.988"
    },
    {
        "year": "1804",
        "RawRingWidth_mm": "0.911",
        "GrowthIndex": "0.852"
    },
    {
        "year": "1805",
        "RawRingWidth_mm": "1.012",
        "GrowthIndex": "0.942"
    },
    {
        "year": "1806",
        "RawRingWidth_mm": "1.013",
        "GrowthIndex": "0.949"
    },
    {
        "year": "1807",
        "RawRingWidth_mm": "1.063",
        "GrowthIndex": "0.97"
    },
    {
        "year": "1808",
        "RawRingWidth_mm": "1.283",
        "GrowthIndex": "1.179"
    },
    {
        "year": "1809",
        "RawRingWidth_mm": "1.311",
        "GrowthIndex": "1.255"
    },
    {
        "year": "1810",
        "RawRingWidth_mm": "1.411",
        "GrowthIndex": "1.357"
    },
    {
        "year": "1811",
        "RawRingWidth_mm": "1.444",
        "GrowthIndex": "1.374"
    },
    {
        "year": "1812",
        "RawRingWidth_mm": "1.43",
        "GrowthIndex": "1.367"
    },
    {
        "year": "1813",
        "RawRingWidth_mm": "1.433",
        "GrowthIndex": "1.371"
    },
    {
        "year": "1814",
        "RawRingWidth_mm": "1.308",
        "GrowthIndex": "1.237"
    },
    {
        "year": "1815",
        "RawRingWidth_mm": "1.661",
        "GrowthIndex": "1.565"
    },
    {
        "year": "1816",
        "RawRingWidth_mm": "1.377",
        "GrowthIndex": "1.308"
    },
    {
        "year": "1817",
        "RawRingWidth_mm": "1.456",
        "GrowthIndex": "1.402"
    },
    {
        "year": "1818",
        "RawRingWidth_mm": "1.377",
        "GrowthIndex": "1.323"
    },
    {
        "year": "1819",
        "RawRingWidth_mm": "1.029",
        "GrowthIndex": "1.012"
    },
    {
        "year": "1820",
        "RawRingWidth_mm": "1.018",
        "GrowthIndex": "0.995"
    },
    {
        "year": "1821",
        "RawRingWidth_mm": "0.986",
        "GrowthIndex": "0.947"
    },
    {
        "year": "1822",
        "RawRingWidth_mm": "1",
        "GrowthIndex": "0.951"
    },
    {
        "year": "1823",
        "RawRingWidth_mm": "1.264",
        "GrowthIndex": "1.206"
    },
    {
        "year": "1824",
        "RawRingWidth_mm": "1.289",
        "GrowthIndex": "1.228"
    },
    {
        "year": "1825",
        "RawRingWidth_mm": "1.382",
        "GrowthIndex": "1.32"
    },
    {
        "year": "1826",
        "RawRingWidth_mm": "1.01",
        "GrowthIndex": "0.977"
    },
    {
        "year": "1827",
        "RawRingWidth_mm": "1.07",
        "GrowthIndex": "1.025"
    },
    {
        "year": "1828",
        "RawRingWidth_mm": "1.164",
        "GrowthIndex": "1.096"
    },
    {
        "year": "1829",
        "RawRingWidth_mm": "1.13",
        "GrowthIndex": "1.07"
    },
    {
        "year": "1830",
        "RawRingWidth_mm": "1.383",
        "GrowthIndex": "1.302"
    },
    {
        "year": "1831",
        "RawRingWidth_mm": "1.362",
        "GrowthIndex": "1.286"
    },
    {
        "year": "1832",
        "RawRingWidth_mm": "1.487",
        "GrowthIndex": "1.425"
    },
    {
        "year": "1833",
        "RawRingWidth_mm": "1.519",
        "GrowthIndex": "1.434"
    },
    {
        "year": "1834",
        "RawRingWidth_mm": "1.559",
        "GrowthIndex": "1.466"
    },
    {
        "year": "1835",
        "RawRingWidth_mm": "1.276",
        "GrowthIndex": "1.216"
    },
    {
        "year": "1836",
        "RawRingWidth_mm": "1.157",
        "GrowthIndex": "1.096"
    },
    {
        "year": "1837",
        "RawRingWidth_mm": "1.053",
        "GrowthIndex": "0.975"
    },
    {
        "year": "1838",
        "RawRingWidth_mm": "1.31",
        "GrowthIndex": "1.22"
    },
    {
        "year": "1839",
        "RawRingWidth_mm": "0.866",
        "GrowthIndex": "0.811"
    },
    {
        "year": "1840",
        "RawRingWidth_mm": "0.874",
        "GrowthIndex": "0.82"
    },
    {
        "year": "1841",
        "RawRingWidth_mm": "0.864",
        "GrowthIndex": "0.805"
    },
    {
        "year": "1842",
        "RawRingWidth_mm": "1.005",
        "GrowthIndex": "0.942"
    },
    {
        "year": "1843",
        "RawRingWidth_mm": "1.124",
        "GrowthIndex": "1.053"
    },
    {
        "year": "1844",
        "RawRingWidth_mm": "1.136",
        "GrowthIndex": "1.071"
    },
    {
        "year": "1845",
        "RawRingWidth_mm": "1.192",
        "GrowthIndex": "1.125"
    },
    {
        "year": "1846",
        "RawRingWidth_mm": "0.974",
        "GrowthIndex": "0.915"
    },
    {
        "year": "1847",
        "RawRingWidth_mm": "1.096",
        "GrowthIndex": "1.037"
    },
    {
        "year": "1848",
        "RawRingWidth_mm": "1.261",
        "GrowthIndex": "1.18"
    },
    {
        "year": "1849",
        "RawRingWidth_mm": "1.199",
        "GrowthIndex": "1.127"
    },
    {
        "year": "1850",
        "RawRingWidth_mm": "1.147",
        "GrowthIndex": "1.083"
    },
    {
        "year": "1851",
        "RawRingWidth_mm": "1.18",
        "GrowthIndex": "1.094"
    },
    {
        "year": "1852",
        "RawRingWidth_mm": "1.109",
        "GrowthIndex": "1.03"
    },
    {
        "year": "1853",
        "RawRingWidth_mm": "1.16",
        "GrowthIndex": "1.09"
    },
    {
        "year": "1854",
        "RawRingWidth_mm": "1.359",
        "GrowthIndex": "1.263"
    },
    {
        "year": "1855",
        "RawRingWidth_mm": "1.039",
        "GrowthIndex": "0.969"
    },
    {
        "year": "1856",
        "RawRingWidth_mm": "0.628",
        "GrowthIndex": "0.575"
    },
    {
        "year": "1857",
        "RawRingWidth_mm": "0.889",
        "GrowthIndex": "0.833"
    },
    {
        "year": "1858",
        "RawRingWidth_mm": "1.04",
        "GrowthIndex": "0.967"
    },
    {
        "year": "1859",
        "RawRingWidth_mm": "1.013",
        "GrowthIndex": "0.95"
    },
    {
        "year": "1860",
        "RawRingWidth_mm": "1.099",
        "GrowthIndex": "1.033"
    },
    {
        "year": "1861",
        "RawRingWidth_mm": "1.096",
        "GrowthIndex": "1.03"
    },
    {
        "year": "1862",
        "RawRingWidth_mm": "0.912",
        "GrowthIndex": "0.855"
    },
    {
        "year": "1863",
        "RawRingWidth_mm": "0.937",
        "GrowthIndex": "0.868"
    },
    {
        "year": "1864",
        "RawRingWidth_mm": "1.043",
        "GrowthIndex": "0.956"
    },
    {
        "year": "1865",
        "RawRingWidth_mm": "0.715",
        "GrowthIndex": "0.641"
    },
    {
        "year": "1866",
        "RawRingWidth_mm": "0.969",
        "GrowthIndex": "0.906"
    },
    {
        "year": "1867",
        "RawRingWidth_mm": "0.99",
        "GrowthIndex": "0.916"
    },
    {
        "year": "1868",
        "RawRingWidth_mm": "1.016",
        "GrowthIndex": "0.948"
    },
    {
        "year": "1869",
        "RawRingWidth_mm": "0.723",
        "GrowthIndex": "0.653"
    },
    {
        "year": "1870",
        "RawRingWidth_mm": "0.965",
        "GrowthIndex": "0.888"
    },
    {
        "year": "1871",
        "RawRingWidth_mm": "0.804",
        "GrowthIndex": "0.715"
    },
    {
        "year": "1872",
        "RawRingWidth_mm": "0.918",
        "GrowthIndex": "0.833"
    },
    {
        "year": "1873",
        "RawRingWidth_mm": "0.701",
        "GrowthIndex": "0.61"
    },
    {
        "year": "1874",
        "RawRingWidth_mm": "0.841",
        "GrowthIndex": "0.765"
    },
    {
        "year": "1875",
        "RawRingWidth_mm": "1.058",
        "GrowthIndex": "0.973"
    },
    {
        "year": "1876",
        "RawRingWidth_mm": "1.083",
        "GrowthIndex": "0.975"
    },
    {
        "year": "1877",
        "RawRingWidth_mm": "0.788",
        "GrowthIndex": "0.702"
    },
    {
        "year": "1878",
        "RawRingWidth_mm": "0.874",
        "GrowthIndex": "0.784"
    },
    {
        "year": "1879",
        "RawRingWidth_mm": "0.937",
        "GrowthIndex": "0.851"
    },
    {
        "year": "1880",
        "RawRingWidth_mm": "1.129",
        "GrowthIndex": "1.041"
    },
    {
        "year": "1881",
        "RawRingWidth_mm": "1.004",
        "GrowthIndex": "0.914"
    },
    {
        "year": "1882",
        "RawRingWidth_mm": "1.109",
        "GrowthIndex": "1.028"
    },
    {
        "year": "1883",
        "RawRingWidth_mm": "0.965",
        "GrowthIndex": "0.879"
    },
    {
        "year": "1884",
        "RawRingWidth_mm": "1.131",
        "GrowthIndex": "1.039"
    },
    {
        "year": "1885",
        "RawRingWidth_mm": "1.089",
        "GrowthIndex": "0.998"
    },
    {
        "year": "1886",
        "RawRingWidth_mm": "1.136",
        "GrowthIndex": "1.037"
    },
    {
        "year": "1887",
        "RawRingWidth_mm": "0.936",
        "GrowthIndex": "0.853"
    },
    {
        "year": "1888",
        "RawRingWidth_mm": "0.91",
        "GrowthIndex": "0.823"
    },
    {
        "year": "1889",
        "RawRingWidth_mm": "1.136",
        "GrowthIndex": "1.028"
    },
    {
        "year": "1890",
        "RawRingWidth_mm": "1.263",
        "GrowthIndex": "1.17"
    },
    {
        "year": "1891",
        "RawRingWidth_mm": "1.23",
        "GrowthIndex": "1.152"
    },
    {
        "year": "1892",
        "RawRingWidth_mm": "0.858",
        "GrowthIndex": "0.847"
    },
    {
        "year": "1893",
        "RawRingWidth_mm": "0.979",
        "GrowthIndex": "0.949"
    },
    {
        "year": "1894",
        "RawRingWidth_mm": "1.127",
        "GrowthIndex": "1.064"
    },
    {
        "year": "1895",
        "RawRingWidth_mm": "0.75",
        "GrowthIndex": "0.697"
    },
    {
        "year": "1896",
        "RawRingWidth_mm": "0.953",
        "GrowthIndex": "0.872"
    },
    {
        "year": "1897",
        "RawRingWidth_mm": "1.092",
        "GrowthIndex": "1.006"
    },
    {
        "year": "1898",
        "RawRingWidth_mm": "1.149",
        "GrowthIndex": "1.084"
    },
    {
        "year": "1899",
        "RawRingWidth_mm": "0.713",
        "GrowthIndex": "0.65"
    },
    {
        "year": "1900",
        "RawRingWidth_mm": "0.674",
        "GrowthIndex": "0.59"
    },
    {
        "year": "1901",
        "RawRingWidth_mm": "0.585",
        "GrowthIndex": "0.5"
    },
    {
        "year": "1902",
        "RawRingWidth_mm": "0.942",
        "GrowthIndex": "0.869"
    },
    {
        "year": "1903",
        "RawRingWidth_mm": "0.855",
        "GrowthIndex": "0.787"
    },
    {
        "year": "1904",
        "RawRingWidth_mm": "0.807",
        "GrowthIndex": "0.754"
    },
    {
        "year": "1905",
        "RawRingWidth_mm": "0.796",
        "GrowthIndex": "0.725"
    },
    {
        "year": "1906",
        "RawRingWidth_mm": "0.798",
        "GrowthIndex": "0.73"
    },
    {
        "year": "1907",
        "RawRingWidth_mm": "0.747",
        "GrowthIndex": "0.669"
    },
    {
        "year": "1908",
        "RawRingWidth_mm": "0.626",
        "GrowthIndex": "0.538"
    },
    {
        "year": "1909",
        "RawRingWidth_mm": "0.687",
        "GrowthIndex": "0.611"
    },
    {
        "year": "1910",
        "RawRingWidth_mm": "0.699",
        "GrowthIndex": "0.614"
    },
    {
        "year": "1911",
        "RawRingWidth_mm": "0.605",
        "GrowthIndex": "0.517"
    },
    {
        "year": "1912",
        "RawRingWidth_mm": "0.6",
        "GrowthIndex": "0.51"
    },
    {
        "year": "1913",
        "RawRingWidth_mm": "0.725",
        "GrowthIndex": "0.643"
    },
    {
        "year": "1914",
        "RawRingWidth_mm": "0.588",
        "GrowthIndex": "0.503"
    },
    {
        "year": "1915",
        "RawRingWidth_mm": "0.908",
        "GrowthIndex": "0.827"
    },
    {
        "year": "1916",
        "RawRingWidth_mm": "0.759",
        "GrowthIndex": "0.692"
    },
    {
        "year": "1917",
        "RawRingWidth_mm": "0.671",
        "GrowthIndex": "0.599"
    },
    {
        "year": "1918",
        "RawRingWidth_mm": "0.702",
        "GrowthIndex": "0.615"
    },
    {
        "year": "1919",
        "RawRingWidth_mm": "0.719",
        "GrowthIndex": "0.632"
    },
    {
        "year": "1920",
        "RawRingWidth_mm": "0.758",
        "GrowthIndex": "0.668"
    },
    {
        "year": "1921",
        "RawRingWidth_mm": "0.859",
        "GrowthIndex": "0.761"
    },
    {
        "year": "1922",
        "RawRingWidth_mm": "0.849",
        "GrowthIndex": "0.754"
    },
    {
        "year": "1923",
        "RawRingWidth_mm": "0.776",
        "GrowthIndex": "0.684"
    },
    {
        "year": "1924",
        "RawRingWidth_mm": "0.743",
        "GrowthIndex": "0.649"
    },
    {
        "year": "1925",
        "RawRingWidth_mm": "1.068",
        "GrowthIndex": "0.97"
    },
    {
        "year": "1926",
        "RawRingWidth_mm": "1.042",
        "GrowthIndex": "0.936"
    },
    {
        "year": "1927",
        "RawRingWidth_mm": "0.903",
        "GrowthIndex": "0.814"
    },
    {
        "year": "1928",
        "RawRingWidth_mm": "0.88",
        "GrowthIndex": "0.794"
    },
    {
        "year": "1929",
        "RawRingWidth_mm": "0.744",
        "GrowthIndex": "0.665"
    },
    {
        "year": "1930",
        "RawRingWidth_mm": "0.735",
        "GrowthIndex": "0.66"
    },
    {
        "year": "1931",
        "RawRingWidth_mm": "0.549",
        "GrowthIndex": "0.467"
    },
    {
        "year": "1932",
        "RawRingWidth_mm": "0.77",
        "GrowthIndex": "0.7"
    },
    {
        "year": "1933",
        "RawRingWidth_mm": "0.774",
        "GrowthIndex": "0.692"
    },
    {
        "year": "1934",
        "RawRingWidth_mm": "0.641",
        "GrowthIndex": "0.558"
    },
    {
        "year": "1935",
        "RawRingWidth_mm": "0.802",
        "GrowthIndex": "0.719"
    },
    {
        "year": "1936",
        "RawRingWidth_mm": "0.807",
        "GrowthIndex": "0.719"
    },
    {
        "year": "1937",
        "RawRingWidth_mm": "0.79",
        "GrowthIndex": "0.71"
    },
    {
        "year": "1938",
        "RawRingWidth_mm": "0.908",
        "GrowthIndex": "0.814"
    },
    {
        "year": "1939",
        "RawRingWidth_mm": "0.878",
        "GrowthIndex": "0.764"
    },
    {
        "year": "1940",
        "RawRingWidth_mm": "0.798",
        "GrowthIndex": "0.693"
    },
    {
        "year": "1941",
        "RawRingWidth_mm": "0.981",
        "GrowthIndex": "0.884"
    },
    {
        "year": "1942",
        "RawRingWidth_mm": "1.062",
        "GrowthIndex": "0.971"
    },
    {
        "year": "1943",
        "RawRingWidth_mm": "1.095",
        "GrowthIndex": "1.022"
    },
    {
        "year": "1944",
        "RawRingWidth_mm": "0.839",
        "GrowthIndex": "0.779"
    },
    {
        "year": "1945",
        "RawRingWidth_mm": "0.795",
        "GrowthIndex": "0.731"
    },
    {
        "year": "1946",
        "RawRingWidth_mm": "1.145",
        "GrowthIndex": "1.069"
    },
    {
        "year": "1947",
        "RawRingWidth_mm": "1.122",
        "GrowthIndex": "1.05"
    },
    {
        "year": "1948",
        "RawRingWidth_mm": "0.936",
        "GrowthIndex": "0.878"
    },
    {
        "year": "1949",
        "RawRingWidth_mm": "0.888",
        "GrowthIndex": "0.821"
    },
    {
        "year": "1950",
        "RawRingWidth_mm": "0.927",
        "GrowthIndex": "0.845"
    },
    {
        "year": "1951",
        "RawRingWidth_mm": "1.083",
        "GrowthIndex": "0.997"
    },
    {
        "year": "1952",
        "RawRingWidth_mm": "1.094",
        "GrowthIndex": "1.009"
    },
    {
        "year": "1953",
        "RawRingWidth_mm": "0.881",
        "GrowthIndex": "0.809"
    },
    {
        "year": "1954",
        "RawRingWidth_mm": "0.999",
        "GrowthIndex": "0.931"
    },
    {
        "year": "1955",
        "RawRingWidth_mm": "0.874",
        "GrowthIndex": "0.813"
    },
    {
        "year": "1956",
        "RawRingWidth_mm": "0.878",
        "GrowthIndex": "0.804"
    },
    {
        "year": "1957",
        "RawRingWidth_mm": "1.125",
        "GrowthIndex": "1.051"
    },
    {
        "year": "1958",
        "RawRingWidth_mm": "1.182",
        "GrowthIndex": "1.116"
    },
    {
        "year": "1959",
        "RawRingWidth_mm": "1.012",
        "GrowthIndex": "0.969"
    },
    {
        "year": "1960",
        "RawRingWidth_mm": "0.924",
        "GrowthIndex": "0.866"
    },
    {
        "year": "1961",
        "RawRingWidth_mm": "1.248",
        "GrowthIndex": "1.186"
    },
    {
        "year": "1962",
        "RawRingWidth_mm": "1.159",
        "GrowthIndex": "1.104"
    },
    {
        "year": "1963",
        "RawRingWidth_mm": "1.377",
        "GrowthIndex": "1.321"
    },
    {
        "year": "1964",
        "RawRingWidth_mm": "1.213",
        "GrowthIndex": "1.164"
    },
    {
        "year": "1965",
        "RawRingWidth_mm": "1.158",
        "GrowthIndex": "1.116"
    },
    {
        "year": "1966",
        "RawRingWidth_mm": "1.25",
        "GrowthIndex": "1.199"
    },
    {
        "year": "1967",
        "RawRingWidth_mm": "1.233",
        "GrowthIndex": "1.194"
    },
    {
        "year": "1968",
        "RawRingWidth_mm": "1.193",
        "GrowthIndex": "1.17"
    },
    {
        "year": "1969",
        "RawRingWidth_mm": "0.96",
        "GrowthIndex": "0.955"
    },
    {
        "year": "1970",
        "RawRingWidth_mm": "1.149",
        "GrowthIndex": "1.123"
    },
    {
        "year": "1971",
        "RawRingWidth_mm": "1.258",
        "GrowthIndex": "1.222"
    },
    {
        "year": "1972",
        "RawRingWidth_mm": "0.914",
        "GrowthIndex": "0.907"
    },
    {
        "year": "1973",
        "RawRingWidth_mm": "0.967",
        "GrowthIndex": "0.946"
    },
    {
        "year": "1974",
        "RawRingWidth_mm": "0.923",
        "GrowthIndex": "0.888"
    },
    {
        "year": "1975",
        "RawRingWidth_mm": "0.953",
        "GrowthIndex": "0.925"
    },
    {
        "year": "1976",
        "RawRingWidth_mm": "0.886",
        "GrowthIndex": "0.846"
    },
    {
        "year": "1977",
        "RawRingWidth_mm": "0.852",
        "GrowthIndex": "0.801"
    },
    {
        "year": "1978",
        "RawRingWidth_mm": "0.734",
        "GrowthIndex": "0.673"
    },
    {
        "year": "1979",
        "RawRingWidth_mm": "0.781",
        "GrowthIndex": "0.716"
    },
    {
        "year": "1980",
        "RawRingWidth_mm": "0.733",
        "GrowthIndex": "0.66"
    },
    {
        "year": "1981",
        "RawRingWidth_mm": "0.747",
        "GrowthIndex": "0.658"
    },
    {
        "year": "1982",
        "RawRingWidth_mm": "0.671",
        "GrowthIndex": "0.581"
    },
    {
        "year": "1983",
        "RawRingWidth_mm": "0.858",
        "GrowthIndex": "0.782"
    },
    {
        "year": "1984",
        "RawRingWidth_mm": "0.719",
        "GrowthIndex": "0.641"
    },
    {
        "year": "1985",
        "RawRingWidth_mm": "0.895",
        "GrowthIndex": "0.812"
    },
    {
        "year": "1986",
        "RawRingWidth_mm": "0.9",
        "GrowthIndex": "0.836"
    },
    {
        "year": "1987",
        "RawRingWidth_mm": "0.799",
        "GrowthIndex": "0.734"
    },
    {
        "year": "1988",
        "RawRingWidth_mm": "0.807",
        "GrowthIndex": "0.741"
    },
    {
        "year": "1989",
        "RawRingWidth_mm": "0.783",
        "GrowthIndex": "0.716"
    },
    {
        "year": "1990",
        "RawRingWidth_mm": "0.784",
        "GrowthIndex": "0.705"
    },
    {
        "year": "1991",
        "RawRingWidth_mm": "0.814",
        "GrowthIndex": "0.733"
    },
    {
        "year": "1992",
        "RawRingWidth_mm": "0.663",
        "GrowthIndex": "0.574"
    },
    {
        "year": "1993",
        "RawRingWidth_mm": "0.582",
        "GrowthIndex": "0.492"
    },
    {
        "year": "1994",
        "RawRingWidth_mm": "0.558",
        "GrowthIndex": "0.451"
    },
    {
        "year": "1995",
        "RawRingWidth_mm": "0.818",
        "GrowthIndex": "0.716"
    },
    {
        "year": "1996",
        "RawRingWidth_mm": "0.772",
        "GrowthIndex": "0.669"
    },
    {
        "year": "1997",
        "RawRingWidth_mm": "0.848",
        "GrowthIndex": "0.752"
    },
    {
        "year": "1998",
        "RawRingWidth_mm": "0.571",
        "GrowthIndex": "0.472"
    },
    {
        "year": "1999",
        "RawRingWidth_mm": "0.805",
        "GrowthIndex": "0.715"
    },
    {
        "year": "2000",
        "RawRingWidth_mm": "0.856",
        "GrowthIndex": "0.758"
    }
]
