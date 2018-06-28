package entity;

import java.sql.Date;

import annotations.Column;
import annotations.Table;

@Table(name="article", Name="����")
public class Article {
	@Column(isId=true, name="article_id", ChineseName="���º�")
	private Integer articleId;
	@Column(name="title", ChineseName="����")
	private String title;
	@Column(name="author", ChineseName="����")
	private String author;
	@Column(name="column_name", ChineseName="��Ŀ����")
	private String columnName;
	@Column(name="create_time", ChineseName="����ʱ��")
	private Date createTime;
	@Column(name="isPass", ChineseName="״̬")
	private Integer isPass;//0��ʾfalse, 1��ʾtrue

	public Integer getArticleId() {
		return articleId;
	}
	public void setArticleId(String articleId) {
		if(articleId != null) {
			this.articleId = Integer.valueOf(articleId);
		}else {
			this.articleId = null;
		}
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		if(createTime != null) {
			this.createTime = Date.valueOf(createTime);
		}else {
			this.createTime = null;
		}
	}
	public Integer isPass() {
		return isPass;
	}
	public void setPass(String isPass) {
		if(isPass != null) {
			this.isPass = Integer.valueOf(isPass);
		}else {
			this.isPass = null;
		}

	}
}
