import { ReactNode } from "react"
import styles from './PageHeading.module.css'

interface PageHeadingProps {
    children?: ReactNode
}

export const PageHeading = ({ children }: PageHeadingProps) => {
    return (
        <h1 className={styles.heading}>
            {children}
        </h1>
    )
}