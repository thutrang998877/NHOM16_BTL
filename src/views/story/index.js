import '../../App.css';
import './index.css'

function Story() {
  return (
      <div className="body" style={{marginLeft: '4rem', marginRight: '4rem', display: 'flex', flexDirection: 'column', marginBottom: '2rem', alignItems: 'center'}}>
        <div className='top-image'>
            <img src="https://www.tunhamay.vn/content/images/size/w1600/2024/04/_LEK1051-1.jpeg"></img>
        </div>
        <div className='story-image'>
            <div style={{fontSize: '2rem', fontWeight: 'bold', fontFamily: 'math', width: '50%', textAlign: 'center'}}>CÂU CHUYỆN THƯƠNG HIỆU <br></br>
            TỦ NHÀ MÂY </div>
            <div style={{width: '50%'}}>
                <img src="https://www.tunhamay.vn/content/images/size/w1600/2023/09/IMG_7024-1.jpeg" ></img>
            </div>
        </div>
        <p>
        TỦ NHÀ MÂY thành lập ngẫu nhiên bởi một nhóm bạn 4 người, trong một ngày bình thường ở Hà Nội, chúng tôi đi bên nhau và nghĩ mình nên làm gì đó, suy nghĩ lúc ấy rất đơn giản, muốn làm áo dài, muốn ai cũng có đồ đẹp để mặc và tôn vinh nét đẹp truyền thống. 
        </p>
        <p>
            TỦ NHÀ MÂY lần đầu ra mắt trong cái lúng liếng của những hạt mưa đầu mùa năm 2018. Đi cùng năm tháng, trải nghiệm qua những bộ sưu tập thời trang gây ấn tượng, sử dụng nhiều chất liệu, nhiều kỹ thuật khác nhau, lấy tơ, lụa làm chủ đạo, TỦ NHÀ MÂY vẫn kiên trì chủ định kết hợp hiện đại với truyền thống, sang trọng với bình dị, bộc lộ rõ nét nữ tính năng động, duyên dáng.
        </p>
        <div className='content-image-right'>
            <div style={{fontFamily: 'math', flexGrow: '1', textAlign: 'center', marginRight: '1rem'}}>
                <p>
                    Mỗi người phụ nữ đều có tâm hồn và phong cách riêng. Thiết kế thời trang của những tà áo dài của TỦ NHÀ MÂY là cuộc du ngoạn, tìm tòi, sáng tạo trong nghệ thuật, tôn vinh thần thái của tâm hồn, form dáng của phong cách riêng tư đó. 
                    TỦ NHÀ MÂY không theo xu hướng nào quá đặc biệt, chúng tôi chỉ muốn làm ra những tà áo dài nhẹ nhàng mang đến cho bạn cảm giác thoải mái và là chính mình hơn. Mang theo tâm niệm đó, các thiết kế của chúng tôi phần lớn được làm từ những chất liệu nhẹ nhàng, thoáng mát đủ để khiến bạn cảm thấy mình thu hút và mình yêu bản thân. 
                </p>
                <p>
                    Lòng đam mê, tính nhất quán và sự cố gắng liên tục đã cho chúng tôi sự vững vàng trong thiết kế thời trang đầy sáng tạo, tạo dựng được Thương hiệu - TỦ NHÀ MÂY. 
                    Quá trình trải nghiệm nghiêm túc, sự nỗ lực dẫn đến thành công, thành công dẫn đến đam mê và càng đam mê càng nỗ lực chính là vòng quay động lực, là cốt lõi của TỦ NHÀ MÂY.
                </p>
            </div>
            <div className='image-right'>
                <img style={{height: '100%', width: '100%'}} src="https://i.ibb.co/sWfgSqP/huongHa.jpg"></img>
            </div>
        </div>
      </div>
  );
}

export default Story;