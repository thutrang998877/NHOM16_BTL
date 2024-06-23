import '../../App.css';
import './index.css'

function About() {
  return (
      <div className="body" style={{marginLeft: '8rem', marginRight: '8rem', display: 'flex', flexDirection: 'column', marginBottom: '2rem', alignItems: 'center'}}>
        <div className='top-image'>
            <img src="https://i.ibb.co/xS6zzFR/bndoingu.jpg"></img>
        </div>
        <div style={{paddingLeft: '5rem', paddingRight: '5rem'}}>
          <h1>Đội ngũ nhân sự</h1>
          <h1>Tủ nhà mây</h1>
          <p>
            TỦ NHÀ MÂY thành lập năm 2018, bởi một nhóm bạn 4 người với mong muốn, muốn làm áo dài, muốn ai cũng có đồ đẹp để mặc và tôn vinh nét đẹp truyền thống. 
          </p>
          <p>
            Hiện tại, đội ngũ nhân sự TỦ NHÀ MÂY gồm có  30 nhân sự, trong đó có 15 nhân sự khối văn phòng và 15 thợ may lành nghề.  Và đây là 4 nhân sự đặc biệt, là những nguồi đặt nền móng cho TỦ NHÀ MÂY từ những ngày đầu tiên. 
          </p>
          <div className='profile'>
            <div className='profile-detail-right'>
              <div className='position'>
                Co-Founder Thu Anh
              </div>
              <div>
                Chị Thu Anh là đồng sáng lập của TỦ NHÀ MÂY.  Hiện tại, chị Thu Anh giữ vai trò vừa là CEO, đồng thời là nhà thiết kế của TỦ NHÀ MÂY.
              </div>
            </div>
            <div className='profile-image'>
              <img style={{width: '80%'}} src='https://i.ibb.co/Kq6rCzs/chi1.jpg'></img>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-image'>
              <img style={{width: '80%'}} src='https://i.ibb.co/Kj3YtbV/chi2.jpg'></img>
            </div>
            <div className='profile-detail-left'>
              <div className='position'>
                Co-Founder Lan Thy
              </div>
              <div>
                Chị Lan Thy là đồng sáng lập của TỦ NHÀ MÂY.  Hiện tại, chị Lan Thy giữ vai trò vừa là CMO, đồng thời là nhà thiết kế của TỦ NHÀ MÂY. 
              </div>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-detail-right'>
              <div className='position'>
                Co-Founder Hằng Anh
              </div>
              <div>
                Chị Hằng Anh là đồng sáng lập của TỦ NHÀ MÂY.  Hiện tại, chị Hằng Anh giữ vai trò vừa là CFO, đồng thời là nhà thiết kế của TỦ NHÀ MÂY.
              </div>
            </div>
            <div className='profile-image'>
              <img style={{width: '80%'}} src='https://i.ibb.co/7VkwrGP/chi3.jpg'></img>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-image'>
              <img style={{width: '80%'}} src='https://i.ibb.co/TKQkLcQ/chi4.jpg'></img>
            </div>
            <div className='profile-detail-left'>
              <div className='position'>
                Co-Founder Hà Trang
              </div>
              <div>
                Chị Hà Trang là đồng sáng lập của TỦ NHÀ MÂY.  Hiện tại, chị Hà Trang giữ vai trò vừa là COO, đồng thời là nhà thiết kế của TỦ NHÀ MÂY. 
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;