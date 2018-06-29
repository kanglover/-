package entity;

import java.sql.Date;

import annotations.Column;
import annotations.Table;

@Table(name="message", Name="����")
public class Message {
	@Column(isId=true, name="id", ChineseName="����Id")
	private Integer id;
	@Column(name="name", ChineseName="����")
	private String name;
	@Column(name="phone", ChineseName="�绰")
	private String phone;
	@Column(name="email", ChineseName="����")
	private String email;
	@Column(name="time", ChineseName="����ʱ��")
	private Date time;
	@Column(name="note", ChineseName="��ע")
	private String note;
	@Column(name="content", ChineseName="����")
	private String content;
	public Integer getId() {
		return id;
	}
	public void setId(String id) {
		if(id == null) {
			this.id = null;
		}else {
			this.id = Integer.valueOf(id);
		}
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
	public Date getTime() {
		return time;
	}
	public void setTime(String time) {
		if(time != null) {
			this.time = Date.valueOf(time);
		}else {
			this.time = null;
		}
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
}
