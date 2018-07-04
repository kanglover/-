package entity;

import java.sql.Date;

import annotations.Column;
import annotations.Table;

@Table(name="reply", Name="�ظ�")
public class Reply {
	@Column(isId=true, name="id", ChineseName="�ظ�Id", type="Integer")
	private Integer id;
	@Column(name="account_id", ChineseName="�ظ���Id")
	private String accountId;
	@Column(name="message_id", ChineseName="����Id", type="Integer")
	private Integer messageId;
	@Column(name="reply", ChineseName="�ظ�����")
	private String reply;
	@Column(name="reply_time", ChineseName="�ظ�ʱ��", type="Date")
	private Date replyTime;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getAccountId() {
		return accountId;
	}
	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}
	public Integer getMessageId() {
		return messageId;
	}
	public void setMessageId(Integer messageId) {
		this.messageId = messageId;
	}
	public String getReply() {
		return reply;
	}
	public void setReply(String reply) {
		this.reply = reply;
	}
	public Date getReplyTime() {
		return replyTime;
	}
	public void setReplyTime(Date replyTime) {
		this.replyTime = replyTime;
	};
}
