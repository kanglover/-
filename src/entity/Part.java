package entity;

import annotations.Column;
import annotations.Table;

@Table(name="part", Name="��Ŀ")
public class Part {
	@Column(isId=true, name="id", ChineseName="��ĿId")
	private Integer id;
	@Column(name="column_name", ChineseName="��Ŀ��")
	private String columnName;
	@Column(name="father_id", ChineseName="����Ŀ")
	private Integer fatherId;
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
	public Integer getFatherId() {
		return fatherId;
	}
	public void setFatherId(Integer fatherId) {
		this.fatherId = fatherId;
	}
}
