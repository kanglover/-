package entity;

import annotations.Column;
import annotations.Table;

@Table(name="coursegroup", Name="�γ���")
public class CourseGroup {
	@Column(isId=true, name="id", ChineseName="�γ����")
	private Integer id;
	@Column(name="column_name", ChineseName="�γ����Ա")
	private String columnName;
	@Column(name="isHead", ChineseName="�Ƿ�Ϊ������")
	private Integer isHead;//0��ʾfalse,1��ʾtrue
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public Integer isHead() {
		return isHead;
	}
	public void setHead(Integer isHead) {
		this.isHead = isHead;
	}
}
