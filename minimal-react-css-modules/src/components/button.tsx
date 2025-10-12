import styles from './button.module.css'

export function Button(props: React.ComponentProps<'button'>): React.ReactNode {
	return (
		<button type="button" className={styles.button} {...props} />
	)
}
