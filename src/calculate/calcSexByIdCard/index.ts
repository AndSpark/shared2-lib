/**
 * 通过身份证判断性别
 */
export function calcSexByIdCard(idCard: string) {
	let sexStr: '男' | '女' = '女'
	if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
		sexStr = '男'
	}
	return sexStr
}
