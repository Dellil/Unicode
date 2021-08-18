import clsx from 'clsx';
/**
 * 엄청나게 리팩터링이 필요함
 * @param flag
 * @param classesIfFlagTrue
 * @param classesIfFlagFalse
 * @param commonClasses
 * 파라미터로 넣은 flag가 true / false일때 클래스 다르게 적용시켜주는 함수
 *
 * applyClassNameByBoolean(title === currentWorkspace.title, 'true일때 넣을 클래스', 'false일때 넣을 클래스', 'true/false 공통으로 쓰는 class')
 */
export default function applyClassNameByBoolean(
	flag: Boolean,
	classesIfFlagTrue: String,
	classesIfFlagFalse: String,
	commonClasses: String,
) {
	return flag
		? clsx(classesIfFlagTrue, commonClasses)
		: clsx(classesIfFlagFalse, commonClasses);
}
