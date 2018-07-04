package entity;

import annotations.Column;
import annotations.Table;

@Table(name="account", Name="用户")
public class Account {
	@Column(isId=true, name="account_id", ChineseName="用户id")
	private String accountId;
	@Column(name="password", ChineseName="密码")
	private String password;
	@Column(name="name", ChineseName="昵称")
	private String name;
	@Column(name="phone", ChineseName="电话")
	private String phone;
	@Column(name="email", ChineseName="邮箱")
	private String email;
	@Column(name="image", ChineseName="头像")
	private String image;
	public String getAccount() {
		return accountId;
	}
	public void setAccount(String account) {
		this.accountId = account;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
}
