/**
 * @description:通过身份证号码计算年龄
 */
export function calcAgeByIdCard(identityCard: string): number {
	var len = identityCard.length
	var strBirthday = ''
	if (len == 18) {
		//处理18位的身份证号码从号码中得到生日和性别代码
		strBirthday =
			identityCard.substring(6, 4) +
			'/' +
			identityCard.substring(10, 2) +
			'/' +
			identityCard.substring(12, 2)
	}
	if (len == 15) {
		var birthdayValue = ''
		birthdayValue = identityCard.charAt(6) + identityCard.charAt(7)
		if (parseInt(birthdayValue) < 10) {
			strBirthday =
				'20' +
				identityCard.substring(6, 2) +
				'/' +
				identityCard.substring(8, 2) +
				'/' +
				identityCard.substring(10, 2)
		} else {
			strBirthday =
				'19' +
				identityCard.substring(6, 2) +
				'/' +
				identityCard.substring(8, 2) +
				'/' +
				identityCard.substring(10, 2)
		}
	}
	//时间字符串里，必须是“/”
	var birthDate = new Date(strBirthday)
	var nowDateTime = new Date()
	var age = nowDateTime.getFullYear() - birthDate.getFullYear()
	//再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
	if (
		nowDateTime.getMonth() < birthDate.getMonth() ||
		(nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())
	) {
		age--
	}
	return age
}
