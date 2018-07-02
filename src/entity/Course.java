package entity;

import java.sql.Date;

import annotations.Column;
import annotations.Table;

@Table(name="course", Name="�γ�")
public class Course {
	@Column(isId=true, name="id", ChineseName="�γ�Id", type="Integer")
	private Integer id;
	@Column(name="name", ChineseName="�γ���")
	private String name;
	@Column(name="detail", ChineseName="�γ̼��")
	private String detail;
	@Column(name="image", ChineseName="�γ�ͼƬ")
	private String image;
	@Column(name="video", ChineseName="�γ���Ƶ")
	private String video;
	@Column(name="create_time", ChineseName="����ʱ��", type="Date")
	private Date createTime;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
}
