import React, {useEffect, useState} from "react";
import {range} from "@codeunic/library-hooks";
import styles from '../../sass/modules/Pagination.module.scss'

export const LEFT_PAGE = "LEFT";
export const RIGHT_PAGE = "RIGHT";

export interface IPagination {
    totalRecords: number,
    pageLimit?: number,
    pageNeighbours?: number,
    onPageChanged?: (e: any, page: number) => void,
    currentPage?: number;
}

export const Pagination = (props: IPagination) => {
    const {
        totalRecords,
        pageLimit = 20,
        pageNeighbours = 2,
        onPageChanged,
        currentPage = 1
    } = props;
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        setTotalPages(Math.ceil(totalRecords / pageLimit));
    }, [totalRecords]);

    const fetchPageNumbers = () => {
        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

            let pages: any[] = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = totalPages - endPage > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                case hasLeftSpill && !hasRightSpill: {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }
                case hasLeftSpill && hasRightSpill:
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    };

    const pages = fetchPageNumbers() || [];

    return (
        <nav aria-label="Countries Pagination" className={styles.Pagination}>
            <ul className={styles.pagination}>
                {pages.map((page: any, index: number) => {
                    if (page === LEFT_PAGE)
                        return (
                            <li key={index} className={styles.pageItem}>
                                <a
                                    href="/"
                                    className={styles.pageLink}
                                    aria-label="Previous"
                                    onClick={(e) => onPageChanged?.(e, pageNeighbours * 2 - 1)}
                                >
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                        );

                    if (page === RIGHT_PAGE)
                        return (
                            <li key={index} className={styles.pageItem}>
                                <a
                                    className={styles.pageLink}
                                    href="/"
                                    aria-label="Next"
                                    onClick={(e) => onPageChanged?.(e, pageNeighbours * 2 + 1)}
                                >
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        );

                    return (
                        <li
                            key={index}
                            className={`${styles.pageItem} ${currentPage === page ? styles.active : ""}`}
                        >
                            <a
                                className={styles.pageLink}
                                href="/"
                                onClick={(e) => onPageChanged?.(e, page)}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

