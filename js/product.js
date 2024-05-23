const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let data = [
    {
        "image" : "../img/Vũng Tàu.jpg",
        "title": "Vũng Tàu",
        "ans": "Con đường ven biển uốn lượn quanh sườn núi. Mùa này, cả một đoạn dài gần năm cây số, dọc hai bên đường, hoa anh đào nở rộ. Ánh trời tây đỏ ửng chiếu trên hoa, trên lá như còn lưu luyến một ngày qua. Mấy chú chim chuyền cành thi nhau hót líu lo. Dưới ghềnh đá, những đợt sóng trắng xóa oàm oạp xô bờ. Từ mỏm đá cao lộng gió nhìn ra khơi ngắm biển chiều thật sảng khoái và thú vị. Nước biển nhàn nhạt, xanh màu ngọc thạch. Sóng biển khơi xa lăn tăn lấp lóa ánh nắng chiều. Mặt biển như một tấm gương khổng lồ long lanh dát muôn vàn ánh đỏ phản chiếu sắc trời ửng đỏ phía tây. Những cánh buồm trắng được nắng chiều hắt vào, sáng bừng lên. Buồm no gió chờ con thuyền đầy ắp cá tôm dập dìu vào bờ, trông như một đàn bướm trắng giữa nền trời xanh. Từ mỏm đá cao lộng gió nhìn dọc bên phải là rừng phi lao và những bãi cát dài. Người ra tắm biển đông, kín cả bãi biển. Những cây dù cắm chen nhau tạo thành một hàng dài đủ sắc màu. Những dãy ghế được xếp thẳng tắp mặt hướng về biển. Người chơi đùa trên cát, người nhấp nhô trên sóng, cả một đám đông hàng mấy trăm người như lọt thỏm giữa trời biển mênh mông.",
    },
    {
        "image" : "../img/Phú Quốc.jpg",
        "title": "Phú Quốc",
        "ans": "Nơi ấy quanh năm tràn ngập hương muối và gió biển. Hàng năm có rất nhiều khách du lịch đến tham quan và nghỉ mát tại đây. Bãi cát trắng trải dài cùng nước biển xanh chính là điểm thu hút khách du lịch. Mỗi buổi sớm, những đoàn thuyền đánh cá sau một đêm dài lênh đênh ngoài biển xa trở về, mang theo những chú cá còn tươi, còn đang giãy mạnh về bán. Phiên chợ hải sản nhỏ ngay tại trên thuyền được tổ chức mỗi ngày trên bờ biển. Không chỉ vậy, nếu ra biển vào lúc còn sớm là có thể nhìn thấy cảnh mặt trời mọc trên biển. Đó là cảnh tượng vô cùng đẹp đẽ và ấn tượng. Mặt trời tròn to như lòng đỏ quả trứng gà, dần dần xuất hiện nơi chân trời. Mặt nước như được nhuộm một màu cam rực rỡ, khiến người khác cảm giác như biển chính là căn nhà của mặt trời, để nó trở về nghỉ ngơi sau một ngày vất vả vậy. Từng con sóng nhỏ lăn tăn dạt vào bờ, mang theo những vỏ sò nhỏ để lại trên mặt cát trắng.",
    },
    {
        "image" : "../img/Nha trang.jpg",
        "title": "Nha Trang",
        "ans": "Bãi biển Nha Trang trải dài với bờ cát trắng xóa. Để đi đến được bãi biển phải đi qua những khu tiểu cảnh khá lớn. Tại đây, họ trồng những cây cỏ nhỏ xíu phủ kín mặt đất. Đôi chỗ có trồng những cây cọ và một vài cây dừa. Đi qua khu vườn tiểu cảnh này là một dãy dừa chạy dọc ven bờ biển. Có những cây dừa đổ nghiêng đang ngả mình về phía biển. Trên ngọn cây, những trái dừa mọng nước trĩu nặng. Bên dưới những gốc dừa, người ta đặt những chiếc ghế nằm để du khách có thể nghỉ ngơi ở ven biển. Trên bãi cát, rất nhiều người đang nằm để tắm nắng. Ánh nắng mặt trời vào ngày hè vốn gay gắt là vậy nhưng không hiểu sao ở vùng biển này chúng chỉ đủ để khiến người ta cảm thấy ấm áp hơn. Chính chúng đã giúp cho mặt biển trở nên lung linh và đẹp hơn.",
    },
    {
        "image" : "../img/Hạ long.jpg",
        "title": "Hạ Long",
        "ans": "Vịnh Hạ Long, một thiên đàng nổi tiếng của Việt Nam, đang tỏa sáng tự hào không chỉ của người dân Quảng Ninh mà còn của cả đất nước. Khi chúng ta bước chân vào Vịnh Hạ Long, chúng ta như bị mê hoặc bởi một bữa tiệc hoàn hảo của sắc xanh. Trời xanh rộn ràng, biển xanh thẳm, và những bãi cỏ tươi tốt trên những mỏm đá kỳ quái, tất cả kết hợp với nhau để tạo nên một bức tranh thiên đàng tươi mát, đem lại sự thư giãn cho tâm hồn của những du khách may mắn đặt chân đến đây. Không khí tại Vịnh Hạ Long trong lành và tươi mát, với một chút dịu dàng và thoải mái. Du khách có cơ hội lướt trên những con thuyền nhỏ để khám phá vịnh. Khi bạn nhìn xuống trong nước biển xanh biếc, bạn có cảm giác như mình đang chiêm ngưỡng một thế giới thần tiên dưới đáy biển. Trong hành trình này, bạn có thể lắng nghe những câu chuyện hấp dẫn và thú vị về lịch sử và văn hóa địa phương, như một hành trình chuyển mình vào một thế giới cổ tích đầy bất ngờ. Với vẻ đẹp độc đáo và tinh tế của nó, Vịnh Hạ Long không thể không được xem là một trong bảy kỳ quan thiên nhiên của thế giới. Nơi đây thực sự xứng đáng với danh hiệu này, với sự hòa quyện hoàn hảo của thiên nhiên và văn hóa.",
    },
    {
        "image" : "../img/Tân Thành.jpg",
        "title": "Tân Thành",
        "ans": "Biển Tân Thành Tiền Giang đẹp nhất là khi bình minh và hoàng hôn. Cả không gian bãi biển nhộn nhịp vào sáng sớm nhưng lại cực kỳ tĩnh lặng và thơ mộng khi hoàng hôn buông xuống. Khi bầu trời nhuộm đỏ ánh hoàng hôn cũng chính là lúc hiện lên khung cảnh lãng mạn làm say lòng người. Ngư dân sẽ cào nghêu, đánh bắt mưu sinh tại biển Tân Thành từ sáng sớm cho đến xế chiều. Sau khi một ngày lao động vất vả kết thúc, không gian xung quanh bỗng chốc yên lặng đến lạ. Các cặp đôi sẽ thường dắt tay nhau rảo bước trên nền cát và tận hưởng hương biển hữu tình. Bình minh tại biển bắt đầu cũng là lúc ngư dân buông cào thả lưới. Lúc này không khí tại Biển Tân Thành Tiền Giang trong lành, gió biển thổi vào mát rười rượi, mặt nước lại lấp lánh câu dẫn lòng người. Sẽ thật tuyệt khi bạn dạo bộ bằng đôi chân trần trên nền cát đen lấp lánh ánh bạc và tận hưởng khoảnh khắc an yên giữa biển cả mênh mông.",
    },
    {
        "image" : "../img/Cam Ranh.jpg",
        "title": "Cam Ranh",
        "ans": "Đặc trưng về cảnh quan của Cam Ranh chính là những bãi biển trải dài với bờ cát trắng mịn êm ái. Màu nước biển ở đây có sắc xanh lam nhạt, phản chiếu màu của bầu trời. Nước biển trong veo có thể nhìn thấy đáy. Sóng biển khá êm và cao vừa phải.",
    },
    {
        "image" : "../img/Navagio.jpg",
        "title": "Navagio (Hy Lạp)",
        "ans": "Bãi biển Navagio (tiếng Hy Lạp: Ναυάγιο, phát âm là [naˈvaʝio]), hay Bãi Tàu Đắm, là một vịnh nhỏ lộ thiên, đôi khi được gọi là Vịnh Buôn Lậu, trên bờ biển Zakynthos, thuộc quần đảo Ionian của Hy Lạp. Bãi biển Navagio ban đầu được gọi là Agios Georgios. Bãi biển Navagio và xác tàu MV Panagiotis.",
    },
    {
        "image" : "../img/Whitehaven.jpg",
        "title": "Whitehaven (Úc)",
        "ans": "Bãi biển Whitehaven được phát hiện và đặt tên bởi Staff Commander EP Bedwell vào năm 1879 và nổi tiếng bởi bờ cát trắng cũng như cảnh quan thiên nhiên tuyệt đẹp. Cát nơi này bao gồm 98% silica nguyên chất khiến cho nó rất mềm mịn và không giữ nhiệt như hầu hết các bãi biển khác; vì vậy bạn có thể thoải mái đi bộ chân trần vào bất kỳ ngày nào trong năm. Thậm chí, bạn có thể làm sạch kim cương và đồ trang sức của mình bằng cát.",
    },
    {
        "image" : "../img/Baia do Sancho.jpg",
        "title": " Baia do San cho (Brazil)",
        "ans": "Đường bờ biển của Baia do Sancho được bao quanh bởi những vách đá hùng vĩ và gây ấn tượng không chỉ bởi tầm nhìn tuyệt đẹp mà còn bởi những đoạn bờ biển khác thường nhất. Đầu tiên, từ ghềnh đá, một loại đài ngắm cảnh tự nhiên ở độ cao 30 m, bạn có thể chiêm ngưỡng toàn cảnh ấn tượng của dải cát rộng nằm dưới chân những tảng đá hùng vỹ này. Đây cũng là nơi tốt nhất để xem cá heo nhảy lên khỏi mặt nước gần bờ. Bờ biển được bao phủ bởi lớp cát vàng nhạt rất mịn và vùng nước ở đây nổi bật với màu xanh lam và ngọc lục bảo đáng kinh ngạc và độ trong suốt đáng kinh ngạc (bạn có thể nhìn thấy xa đến 50 m theo hướng ngang). Lặn với ống thở là một trong những hoạt động phổ biến nhất trên bãi biển này. Tại đây bạn có thể chiêm ngưỡng rất nhiều loại san hô và rùa biển. Do sự sinh sản của cá sau này, bạn không được phép ghé thăm bãi biển từ 6 giờ chiều đến 6 giờ sáng từ tháng 1 đến tháng 7.",
    },
]
function doit()
{
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    var kq = data[productId-1].ans;
    var title =  data[productId-1].title;
    document.getElementById("img").setAttribute("src",data[productId-1].image);
    document.getElementById("title").innerHTML = title;
    document.getElementById("ans").innerHTML = kq;
    console.log(data[0].title);
}
doit();