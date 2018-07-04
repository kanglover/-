package entity;

import java.sql.Date;

import annotations.Column;
import annotations.Table;

@Table(name="message", Name="����")
public class Message {
	@Column(isId=true, name="id", ChineseName="����Id", type = "Integer")
	private Integer id;
	@Column(name="time", ChineseName="����ʱ��", type="Date")
	private Date time;
	@Column(name="note", ChineseName="��ע")
	private String note;
	@Column(name="content", ChineseName="����")
	private String content;
	@Column(name="account_id", ChineseName="������id")
	private String account_id;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
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
	public String getAccount_id() {
		return account_id;
	}
	public void setAccount_id(String account_id) {
		this.account_id = account_id;
	}
}
