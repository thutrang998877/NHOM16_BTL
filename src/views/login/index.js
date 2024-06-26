import { useState } from 'react'
import './index.css'
import { USERS } from '../../constants/account'
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [forgetPassMessage, setForgetPassMessage] = useState('Quên mật khẩu')
  const currentPath = window.location.pathname.replace('/', '')
  const currentUsers = JSON.parse(localStorage.getItem('users'))
  if (!currentUsers) {
    localStorage.setItem('users', JSON.stringify(USERS))
  }
  const navigate = useNavigate();
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(currentPath === 'login')

  const handleForgetPass = () => {
    // Đổi message
    setForgetPassMessage('Quên thì mất ha ha!')
  }

  const handleLogin = () => {
    if (isLogin) {
      if (account === '') {
        window.alert('Vui lòng nhập tài khoản!')
        return
      }
  
      if (password === '') {
        window.alert('Vui lòng nhập mật khẩu!')
        return
      }
// Lấy tất cả users ở localStorage
      const users = JSON.parse(localStorage.getItem('users'))
// kiểm tra xem có tồn tại tên tài khoản không
      const user = users.find(it => it.username === account)
// Báo lỗi nếu thông tin đăng nhập sai
      if (!user || user.password !== password) {
        window.alert('Thông tin đăng nhập không hợp lệ!')
        return
      }
// Thực hiện login
      props.handleLogin(account)
      navigate('/home')
    } else {
      // kiểm tra input
      if (account === '') {
        window.alert('Vui lòng nhập tài khoản!')
        return
      }
  
      if (password === '') {
        window.alert('Vui lòng nhập mật khẩu!')
        return
      }
      // lấy tất cả users
      const users = JSON.parse(localStorage.getItem('users'))
      const user = users.find(it => it.username === account)

      // Trùng username -> Báo lỗi
      if (user) {
        window.alert('Tài khoản này đã tồn tại!')
        return
      }
// Thêm account vào users
      users.push({
        username: account,
        password: password
      })
// lưu users vào localStorage
      localStorage.setItem('users', JSON.stringify(users))
      props.handleLogin(account)
      window.alert('Đăng ký thành công!')
      navigate('/home')
    }
  }
// phần bên trên là xử lý data 
  return (
    <div className='login-body'>
      <div className='login-form-container'>
        <div className='login-form-title'>
          {isLogin ? 'Đăng nhập' : 'Đăng ký'}
        </div>
        <div className='signin-signout-switcher'>
          <button id={`${isLogin ? 'button-switcher-active' : ''}`} onClick={() => {
            setIsLogin(true)
            setAccount('')
            setPassword('')
          }}>
            Đăng nhập
          </button>
          <button id={`${isLogin ? '' : 'button-switcher-active'}`} onClick={() => {
            setIsLogin(false)
            setAccount('')
            setPassword('')
          }} >
            Đăng ký
          </button>
        </div>
        <div className='login-form-inputs'>
          <input type='text' placeholder='Tài khoản' value={account} onChange={(e) => {setAccount(e.target.value)}}/>
          <input type='password' placeholder='Mật khẩu' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
        {isLogin && <a className='forget-password' onClick={handleForgetPass}>{forgetPassMessage}</a>}
        <button className='login-button' onClick={handleLogin}>
          {isLogin ? 'Đăng nhập' : 'Đăng ký'}
        </button>
        <div className='no-account'>
          <h5>{isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}</h5>
          <a href={isLogin ? '/signup' : 'login'}>{isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}</a>
        </div>
      </div>
    </div>
  )
}

export default Login
