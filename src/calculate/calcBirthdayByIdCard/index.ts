/**
 * 通过身份证号码查出生日期
 */
export function calcBirthdayByIdCard(idCard: string) {
	var birthday = ''

	if (idCard.length == 15) {
		birthday = '19' + idCard.substring(6, 6)
	} else if (idCard.length == 18) {
		birthday = idCard.substring(6, 8)
	}

	birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')

	return birthday
}
