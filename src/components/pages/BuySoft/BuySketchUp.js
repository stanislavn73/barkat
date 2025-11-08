import { useState, useRef, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { TableBody, TableFooter, makeStyles } from '@material-ui/core'
import FirstScreen from './FirstScreen/FirstScreen'
import HoverFrame from './HoverFrame'
import BuyButtons from './BuyButtons'
import cx from 'classnames'
import useTranslation from 'next-translate/useTranslation'

import styles from './BuySketchup.module.scss'
import MobileScrollBar from './MobileScrollBar'
import { getRows } from './tableData'

const useStyles = makeStyles(theme => ({
    table: {
        tableLayout: 'fixed',
        marginTop: 10,
    },
    TableCell: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
    },
}))

export default function BuySketchUp() {
    const { t } = useTranslation('buy-sketchup')

    const buyItems = [
        {
            title: t('tableHeaders.options'),
            hideMobileRow: false,
        },
        {
            title: t('tableHeaders.sketchUpFree'),
            hideMobileColumn: false,
        },
        {
            title: t('tableHeaders.sketchUpShop'),
            hideMobileColumn: false,
        },
        {
            title: t('tableHeaders.sketchUpPro'),
            hideMobileColumn: false,
        },
        {
            title: t('tableHeaders.sketchUpStudio'),
            hideMobileColumn: false,
        },
        {
            title: t('tableHeaders.sketchUpEducation'),
            hideMobileColumn: false,
        },
    ]

    const rows = getRows(t)

    const [column, setColumn] = useState(-1)
    const [mobileColumnShowed, setMobileColumnShowed] = useState(buyItems)

    const classes = useStyles()
    let tableRef = useRef(<table></table>)

    function handleSetColumn(column) {
        setColumn(column)
    }

    function handleShowMobileTable(index) {
        let newState = [...mobileColumnShowed].map(item => {
            if (item.title === t('tableHeaders.options')) {
                item.hideMobileRow = true
            } else {
                item.hideMobileColumn = true
            }

            return item
        })

        newState[index + 1].hideMobileColumn = false
        setMobileColumnShowed(newState)
    }

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className={styles['table_container']}>
            <FirstScreen />
            <MobileScrollBar
                buttons={mobileColumnShowed}
                handleShowColumn={handleShowMobileTable}
            />
            <div>
                <Table className={classes.table} ref={tableRef}>
                    <TableHead>
                        {!mobileColumnShowed[0].hideMobileRow && (
                            <TableRow>
                                {mobileColumnShowed.map((item, index) => (
                                    <TableCell
                                        key={index}
                                        onMouseEnter={() => setColumn(index)}
                                        className={classes.TableCell}
                                    >
                                        <div
                                            className={
                                                item.title === t('tableHeaders.options')
                                                    ? styles['options_element']
                                                    : styles['head_element']
                                            }
                                        >
                                            {item.title}
                                        </div>
                                    </TableCell>
                                ))}
                            </TableRow>
                        )}
                        <BuyButtons
                            handleSetColumn={handleSetColumn}
                            mobileButtons={mobileColumnShowed}
                        />
                    </TableHead>

                    <TableBody>
                        {rows.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {Array.isArray(item.option) ? (
                                        <div
                                            className={
                                                styles['options_element']
                                            }
                                            onMouseEnter={() => setColumn(0)}
                                        >
                                            {item.option[0]}
                                            <br />
                                            {item.option[1]}
                                        </div>
                                    ) : (
                                        <div
                                            className={
                                                styles['options_element']
                                            }
                                            onMouseEnter={() => setColumn(0)}
                                        >
                                            {item.option}
                                        </div>
                                    )}
                                </TableCell>
                                {!mobileColumnShowed[1].hideMobileColumn && (
                                    <TableCell
                                        className={cx(
                                            styles.cell,
                                            classes.TableCell
                                        )}
                                        onMouseEnter={() => setColumn(1)}
                                    >
                                        {item.sketchUpFree}
                                    </TableCell>
                                )}
                                {!mobileColumnShowed[2].hideMobileColumn && (
                                    <TableCell
                                        className={cx(
                                            styles.cell,
                                            classes.TableCell
                                        )}
                                        onMouseEnter={() => setColumn(2)}
                                    >
                                        {item.sketchUpShop}
                                    </TableCell>
                                )}
                                {!mobileColumnShowed[3].hideMobileColumn && (
                                    <TableCell
                                        className={cx(
                                            styles.cell,
                                            classes.TableCell
                                        )}
                                        onMouseEnter={() => setColumn(3)}
                                    >
                                        {item.sketchUpPro}
                                    </TableCell>
                                )}
                                {!mobileColumnShowed[4].hideMobileColumn && (
                                    <TableCell
                                        className={cx(
                                            styles.cell,
                                            classes.TableCell
                                        )}
                                        onMouseEnter={() => setColumn(4)}
                                    >
                                        {item.sketchUpStudio}
                                    </TableCell>
                                )}
                                {!mobileColumnShowed[5].hideMobileColumn && (
                                    <TableCell
                                        className={cx(
                                            styles.cell,
                                            classes.TableCell
                                        )}
                                        onMouseEnter={() => setColumn(5)}
                                    >
                                        {item.sketchUpStudents}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>

                    <TableFooter>
                        <BuyButtons
                            handleSetColumn={handleSetColumn}
                            mobileButtons={mobileColumnShowed}
                        />
                    </TableFooter>
                    <TableRow></TableRow>
                    {!mobileColumnShowed[0].hideMobileRow && (
                        <HoverFrame
                            column={column}
                            width={tableRef.current.offsetWidth || 0}
                            height={tableRef.current.offsetHeight}
                        />
                    )}
                </Table>
            </div>
        </div>
    )
}
