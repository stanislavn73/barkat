import React, { useState, useRef } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableBody, TableFooter, makeStyles } from '@material-ui/core';
import FirstScreen from './FirstScreen/FirstScreen';
import HoverFrame from './HoverFrame';
import BuyButtons from './BuyButtons';

import './BuySketchup.module.less';
import MobileScrollBar from './MobileScrollBar';
import { rows } from './tableData';

const buyItems = [
    {
        title: 'Опции',
        hideMobileRow: false,
    },
    {
        title: 'SketchUp Free',
        hideMobileColumn: false,
    },
    {
        title: 'SketchUp Shop',
        hideMobileColumn: false,
    },
    {
        title: 'SketchUp Pro',
        hideMobileColumn: false,
    },
    {
        title: 'SketchUp Studio',
        hideMobileColumn: false,
    },
    {
        title: 'SketchUp для высшего образования',
        hideMobileColumn: false,
    },
];

const useStyles = makeStyles((theme) => ({
    table: {
        tableLayout: 'fixed',
        marginTop: 10,
    },
    TableCell: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
    },
}));

export default function BuySketchUp() {
    const [column, setColumn] = useState(-1);
    const [mobileColumnShowed, setMobileColumnShowed] = useState(buyItems);

    const classes = useStyles();
    let tableRef = useRef(<table></table>);

    function handleSetColumn(column) {
        setColumn(column);
    }

    function handleShowMobileTable(index) {
        let newState = [...mobileColumnShowed].map((item) => {
            if (item.title === 'Опции') {
                item.hideMobileRow = true;
            } else {
                item.hideMobileColumn = true;
            }

            return item;
        });

        newState[index + 1].hideMobileColumn = false;
        setMobileColumnShowed(newState);
    }

    return (
        <div className='table_container'>
            <FirstScreen />
            <MobileScrollBar
                buttons={mobileColumnShowed}
                handleShowColumn={handleShowMobileTable}
            />

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
                                            item.title === 'Опции'
                                                ? 'options_element'
                                                : 'head_element'
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
                                        className='options_element'
                                        onMouseEnter={() => setColumn(0)}
                                    >
                                        {item.option[0]}
                                        <br />
                                        {item.option[1]}
                                    </div>
                                ) : (
                                    <div
                                        className='options_element'
                                        onMouseEnter={() => setColumn(0)}
                                    >
                                        {item.option}
                                    </div>
                                )}
                            </TableCell>
                            {!mobileColumnShowed[1].hideMobileColumn && (
                                <TableCell
                                    className={'cell ' + classes.TableCell}
                                    onMouseEnter={() => setColumn(1)}
                                >
                                    {item.sketchUpFree}
                                </TableCell>
                            )}
                            {!mobileColumnShowed[2].hideMobileColumn && (
                                <TableCell
                                    className={'cell ' + classes.TableCell}
                                    onMouseEnter={() => setColumn(2)}
                                >
                                    {item.sketchUpShop}
                                </TableCell>
                            )}
                            {!mobileColumnShowed[3].hideMobileColumn && (
                                <TableCell
                                    className={'cell ' + classes.TableCell}
                                    onMouseEnter={() => setColumn(3)}
                                >
                                    {item.sketchUpPro}
                                </TableCell>
                            )}
                            {!mobileColumnShowed[4].hideMobileColumn && (
                                <TableCell
                                    className={'cell ' + classes.TableCell}
                                    onMouseEnter={() => setColumn(4)}
                                >
                                    {item.sketchUpStudio}
                                </TableCell>
                            )}
                            {!mobileColumnShowed[5].hideMobileColumn && (
                                <TableCell
                                    className={'cell ' + classes.TableCell}
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
    );
}
