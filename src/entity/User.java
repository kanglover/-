package entity;

import annotations.Column;
import annotations.Table;

@Table(name="user", Name="����Ա")
public class User {
	@Column(isId=true, name="id", ChineseName="����Աid")
	private String id;
	@Column(name="password", ChineseName="����")
	private String password;
	@Column(name="name", ChineseName="����")
	private String name;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
}
